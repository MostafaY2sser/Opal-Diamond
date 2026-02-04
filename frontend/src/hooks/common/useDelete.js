import { useState } from "react";
import axiosClient from "../../api/axiosClient";

export default function useDelete() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteData = async (endpoint) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axiosClient.delete(endpoint);
      setData(response.data);
    } catch (err) {
      console.error("Delete Error:", err);
      setError(err.message || "خطأ أثناء الحذف");
    } finally {
      setLoading(false);
    }
  };

  return { deleteData, data, loading, error };
}
