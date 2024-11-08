import { useState, useEffect, useCallback } from "react";
import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";
import { User } from "@/types/RootState";

interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
  executeRequest: (method: Method, data?: any) => Promise<T>;
}

interface UseApiOptions extends Omit<AxiosRequestConfig, "url" | "method"> {
  immediate?: boolean;
}

export function useApi<T = any>(
  url: string,
  method: Method = "GET",
  options: UseApiOptions = {}
): UseApiReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const executeRequest = useCallback(
    async (requestMethod: Method = method, requestData?: any): Promise<T> => {
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
        const error =
          err instanceof Error ? err : new Error("An unknown error occurred");
        setError(error);
        throw error;
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
