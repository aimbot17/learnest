type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface RequestConfig extends RequestInit {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: any;
}

export type ApiResponse<T> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
};

export interface UseApiOptions extends RequestConfig {
  immediate?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}
