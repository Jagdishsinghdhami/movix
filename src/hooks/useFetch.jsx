import { useEffect, useState } from "react";
import { fetchDataFromAPi } from "../utils/api";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);

    fetchDataFromAPi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        console.log("useFetch error ", err);
        setLoading(false);
        setError("Something went wrong!");
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
