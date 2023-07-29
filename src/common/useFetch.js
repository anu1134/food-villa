import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log("response", json);
        setResponse(json);
        setIsPending(false);
      } catch (error) {
        console.log("error", error);
        setError(`${error} Could not Fetch Data `);
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);
  return { response, isPending, error };
};

export default useFetch;

// lazy loading with infinite scrolling

// useRef
// usecallback
