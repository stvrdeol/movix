import { useEffect, useState } from "react";
import { fetchData } from "../utils/api";

function useFetch(url, params) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetch() {
      setLoading(true);
      setData(null);
      setError(null);
      try {
        const data = await fetchData(url, params);
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, [url]);
  return { data, loading, error };
}

export default useFetch;
