import { useEffect, useState, useMemo } from "react";

const useApi = (API_BASE_URL: string) => {
  const [data, setData] = useState<object>({});
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const apiQuery = async () => {
    try {
      setLoading(true);
      setError(false);
      const controller = new AbortController();
      const signal = controller.signal;

      const res = await fetch(API_BASE_URL, { signal });
      const result = await res.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        setError(true);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    apiQuery();
    return () => {};
  }, []);

  const memoizedApiQuery = useMemo(() => apiQuery, []);

  return [data, error, loading, memoizedApiQuery];
};

export default useApi;
