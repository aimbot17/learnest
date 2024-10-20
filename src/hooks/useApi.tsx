import { useState, useEffect, useCallback, useRef } from "react";
import {
  ApiResponse,
  RequestConfig,
  UseApiOptions,
} from "@/types/useApi.types";

function useApi<T = any>(url: string, options: UseApiOptions = {}) {
  const { immediate = false, onSuccess, onError, ...requestConfig } = options;

  const [state, setState] = useState<ApiResponse<T>>({
    data: null,
    error: null,
    loading: false,
  });

  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchData = async (overrideConfig?: RequestConfig) => {
    // Cancel any ongoing requests
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();

    try {
      const config: RequestConfig = {
        ...requestConfig,
        ...overrideConfig,
        headers: {
          "Content-Type": "application/json",
          ...requestConfig.headers,
          ...overrideConfig?.headers,
        },
      };

      if (config.body && typeof config.body === "object") {
        config.body = JSON.stringify(config.body);
      }

      const response = await fetch(url, {
        ...config,
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      onSuccess?.(data);
      return data;
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        return; // Ignore abort errors
      }
      const errorObject =
        error instanceof Error
          ? error
          : new Error("An unknown error occurred");
      onError?.(errorObject);
      throw errorObject;
    }
  };

  const execute = useCallback(
    async (overrideConfig?: RequestConfig) => {
      setState((prev) => ({ ...prev, loading: true }));
      try {
        const data = await fetchData(overrideConfig);
        setState({ data, error: null, loading: false });
        return data;
      } catch (error) {
        setState({
          data: null,
          error: error instanceof Error ? error : new Error(String(error)),
          loading: false,
        });
        throw error;
      }
    },
    [url, requestConfig, onSuccess, onError] // Include all dependencies here
  );

  useEffect(() => {
    if (immediate) {
      execute();
    }
    return () => {
      abortControllerRef.current?.abort();
    };
  }, [execute, immediate]);

  return {
    ...state,
    execute,
  };
}

export default useApi;