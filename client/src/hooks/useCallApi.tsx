import { useEffect, useState } from "react";

const useCallApi = (API_BASE_URL: string) => {
  const [data, setData] = useState<object>({});
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  async function apiQuery() {
    try {
      setLoading(true);
      setError(false);
      const res = await fetch(API_BASE_URL);
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    apiQuery();
  }, []);

  return [data, error, loading];
};
export default useCallApi;
