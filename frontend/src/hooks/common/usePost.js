import { useState } from "react";
import axiosClient from "../../api/axiosClient";

export default function usePost() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (endpoint, data, isFormData = false) => {
    try {
      setLoading(true);
      const response = await axiosClient.post(endpoint, data, {
        headers: isFormData
          ? { "Content-Type": "multipart/form-data" }
          : { "Content-Type": "application/json" },
      });
      return response.data;
    } catch (err) {
      setError(err.message);
      console.error("Post Error:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { postData, loading, error };
}

