import axios from "axios";

interface APIResponse<T = any> {
  success: boolean;
  status: number | null;
  message: string;
  data: T | null;
}

interface RequestOptions<T = any, U = Record<string, any>> {
  url: string;
  data?: U;
  headers?: Record<string, string>;
  timeout?: number;
  params?: Record<string, string | number | boolean>;
}

function handleAxiosError<T>(error: any): APIResponse<T> {
  if (error.response) {
    const { status, data } = error.response;
    return {
      success: false,
      status,
      message: data.message || "Unknown error",
      data: null,
    };
  } else if (error.request) {
    console.error("Network Error:", error.message);
    return {
      success: false,
      status: null,
      message: "Network error. Please check your connection.",
      data: null,
    };
  } else {
    console.error("Error:", error.message);
    return {
      success: false,
      status: null,
      message: "Error in setting up the request: " + error.message,
      data: null,
    };
  }
}

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});

/**
 * Sends a POST request using Axios.
 * @param {RequestOptions<T, U>} options - Request configuration.
 * @returns {Promise<{ success: boolean; data?: T; error?: any }>} - Response data or error JSON.
 */
export async function sendPostRequest<
  T = Record<string, any>,
  U = Record<string, any>,
>(
  options: RequestOptions<T, U>
): Promise<{ success: boolean; data?: T; error?: any }> {
  const {
    url,
    data = {} as U,
    headers = { "Content-Type": "application/json" },
    timeout = 5000,
  } = options;

  try {
    const response = await axios.post<T>(url, data, { headers, timeout });
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: handleAxiosError(error) };
  }
}
