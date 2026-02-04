
// useUpdate.js
import { useState } from "react";
import axiosClient from "../../api/axiosClient";

export default function useUpdate() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateData = async (url, formData, config = {}) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axiosClient.post(`${url}?_method=PUT`, formData, config);
      return res.data;
    } catch (err) {
      console.error("Update Error:", err.response?.data);
      setError(err.response?.data?.message || "حدث خطأ أثناء التحديث");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { updateData, loading, error };
}
