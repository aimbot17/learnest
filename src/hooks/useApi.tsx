import { useState, useEffect, useCallback, useRef } from "react";
import {
  ApiResponse,
  RequestConfig,
  UseApiOptions,
} from "@/types/useApi.types";

/**
 * useApi hook
 *
 * @param {string} url - The URL of the request
 * @param {UseApiOptions} options - The options for the request
 * @param {boolean} options.immediate - Whether to execute the request immediately or not. Default is false.
 * @param {(data: any) => void} options.onSuccess - Callback function to be called when the request is successful.
 * @param {(error: Error) => void} options.onError - Callback function to be called when the request fails.
 * @param {RequestConfig} options.config - The config object for the request.
 * @returns {{ data: any, error: Error | null, loading: boolean, execute: (config?: RequestConfig) => Promise<any> }}
 */
function useApi<T = any>(url: string, options: UseApiOptions = {}) {
  const { immediate = false, onSuccess, onError, ...requestConfig } = options;

  const [state, setState] = useState<ApiResponse<T>>({
    data: null,
    error: null,
    loading: false,
  });

  const abortControllerRef = useRef<AbortController | null>(null);

  /**
   * Fetches the data from the given URL using the given config.
   * If a request is already ongoing, it will be canceled and a new request will be made.
   * @param {RequestConfig} overrideConfig - The config object to override the default config.
   * @returns {Promise<any>} - The response of the request.
   */
  const fetchData = useCallback(
    async (overrideConfig?: RequestConfig) => {
      setState((prev) => ({ ...prev, loading: true }));

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
        setState({ data, error: null, loading: false });
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
        setState({
          data: null,
          error: errorObject,
          loading: false,
        });
        onError?.(errorObject);
        throw errorObject;
      }
    },
    [url, requestConfig, onSuccess, onError]
  );

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
    return () => {
      abortControllerRef.current?.abort();
    };
  }, [fetchData, immediate]);

  /**
   * Executes the request with the given config.
   * If a request is already ongoing, it will be canceled and a new request will be made.
   * @param {RequestConfig} config - The config object to override the default config.
   * @returns {Promise<any>} - The response of the request.
   */
  const execute = useCallback(
    (overrideConfig?: RequestConfig) => fetchData(overrideConfig),
    [fetchData]
  );

  return {
    ...state,
    execute,
  };
}

export default useApi;
