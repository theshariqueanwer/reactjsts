import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue, errorMessage) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({
          message: error.message || "Failed to fetch data." || errorMessage,
        });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    isFetching,
    error,
    fetchedData,
    setFetchedData
  };

  // return [isFetching, error, fetchedData];

}
