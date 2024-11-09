import { useState, useEffect, useCallback } from "react";
import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";

interface ApiError extends Error {
  statusCode?: number;
  data?: any;
}

interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
  refetch: () => Promise<void>;
  executeRequest: (method: Method, data?: any) => Promise<T>;
}

interface UseApiOptions extends Omit<AxiosRequestConfig, "url" | "method"> {
  immediate?: boolean;
  retries?: number;
  retryDelay?: number;
}

const DEFAULT_RETRIES = 3;
const DEFAULT_RETRY_DELAY = 1000;

export function useApi<T = any>(
  url: string,
  method: Method = "GET",
  options: UseApiOptions = {}
): UseApiReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | null>(null);

  const executeRequest = useCallback(
    async (
      requestMethod: Method = method,
      requestData?: any,
      retryCount = 0
    ): Promise<T> => {
      setLoading(true);
      setError(null);

      try {
        const response: AxiosResponse<T> = await axios({
          url,
          method: requestMethod,
          data: requestData,
          ...options,
        });
        setData(response.data);
        return response.data;
      } catch (err) {
        const apiError: ApiError =
          err instanceof Error ? err : new Error("An unknown error occurred");
        if (axios.isAxiosError(err)) {
          apiError.statusCode = err.response?.status;
          apiError.data = err.response?.data;
          apiError.message = err.response?.data?.errors;
        }

        // Retry logic
        const shouldRetry = retryCount < (options.retries ?? DEFAULT_RETRIES);
        if (
          shouldRetry &&
          (apiError.statusCode === undefined || apiError.statusCode >= 500)
        ) {
          const delay = options.retryDelay ?? DEFAULT_RETRY_DELAY;
          await new Promise((resolve) => setTimeout(resolve, delay));
          return executeRequest(requestMethod, requestData, retryCount + 1);
        }

        setError(apiError);
        throw apiError;
      } finally {
        setLoading(false);
      }
    },
    [url, method, options]
  );

  const fetchData = useCallback(async () => {
    await executeRequest(method);
  }, [executeRequest, method]);

  useEffect(() => {
    if (options.immediate !== false && method === "GET") {
      fetchData();
    }
  }, [fetchData, options.immediate, method]);

  return { data, loading, error, refetch: fetchData, executeRequest };
}
