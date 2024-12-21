import axios from "axios";

interface PostRequestOptions<T = Record<string, any>> {
  url: string;
  data?: T;
  headers?: Record<string, string>;
  timeout?: number;
}

/**
 * Sends a POST request using Axios with optimized error handling and configurability.
 * @param {PostRequestOptions<T>} options - Request configuration.
 * @returns {Promise<any>} - Response data or throws an error.
 */
export async function sendPostRequest<T = Record<string, any>>({
  url,
  data = {} as T,
  headers = { "Content-Type": "application/json" },
  timeout = 5000,
}: PostRequestOptions<T>): Promise<any> {
  try {
    const response = await axios.post(url, data, {
      headers,
      timeout,
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("Server Error:", error.response.data);
      throw new Error(
        `Server responded with status ${error.response.status}: ${error.response.data.message || "Unknown error"}`
      );
    } else if (error.request) {
      console.error("Network Error:", error.message);
      throw new Error("Network error. Please check your connection.");
    } else {
      console.error("Error:", error.message);
      throw new Error("Error in setting up the request: " + error.message);
    }
  }
}
