
import { useEffect, useState, useCallback } from "react";
import { getDoctors, deleteDoctor } from "../../api/doctors.api";

const useDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDoctors = useCallback(async () => {
    try {
      const res = await getDoctors();
      setDoctors(res.data);
    } catch (err) {
      console.log("Error fetching doctors:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteDoctorById = async (id) => {
    try {
      await deleteDoctor(id);
      fetchDoctors(); 
    } catch (err) {
      console.log("Error deleting doctor:", err);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  return {
    doctors,
    loading,
    refetch: fetchDoctors,
    deleteDoctorById,
  };
};

export default useDoctors;
