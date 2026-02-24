import { useState, useEffect } from "react";
import { getDeviceById } from "../../api/devices";

const useDevice = (id) => {
  const [device, setDevice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDevice = async () => {
    try {
      const res = await getDeviceById(id);
      setDevice(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchDevice();
  }, [id]);

  return { device, loading, error };
};

export default useDevice;
