import { useCallback, useState } from "react";

const useFetching = (apiCall) => {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDataLoad = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await apiCall();

      setResponseData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { responseData, handleDataLoad, isLoading, error };
};

export default useFetching;
