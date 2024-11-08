// Backend API URL
export const API_URL: string =
  import.meta.env.NODE_ENV === "production"
    ? "https://constcode.onrender.com/api/health"
    : "http://localhost:7000";
