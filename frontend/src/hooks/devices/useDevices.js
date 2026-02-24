import { useState, useEffect, useCallback } from "react";
import { getDevices, deleteDevice } from "../../api/devices"; 

const useDevices = () => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDevices = useCallback(async () => {
    try {
      const res = await getDevices();
      setDevices(res.data);
    } catch (err) {
      console.log("Error fetching devices:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteDeviceById = async (id) => {
    try {
      await deleteDevice(id);
      fetchDevices(); 
    } catch (err) {
      console.log("Error deleting device:", err);
    }
  };

  useEffect(() => {
    fetchDevices();
  }, [fetchDevices]);

  return {
    devices,
    loading,
    refetch: fetchDevices,
    deleteDeviceById,
  };
};

export default useDevices;
