import { useState } from "react";
import axiosClient from "../../api/axiosClient";

export default function useFetch() {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async (endpoint) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axiosClient.get(endpoint);
      setData(response.data);
    } catch (err) {
      console.error("Fetch Error:", err);
      setError(err.message || "خطأ في جلب البيانات");
    } finally {
      setLoading(false);
    }
  };

  return { getData, data, loading, error };
}
