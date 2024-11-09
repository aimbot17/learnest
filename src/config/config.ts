const NODE_ENV = import.meta.env.MODE;

export const API_URL: string =
  NODE_ENV === "production"
    ? "https://constcode.onrender.com"
    : "http://localhost:7000";
