import { useEffect, useState } from "react";
import { getDoctorById } from "../../api/doctors.api";

const useDoctor = (id) => {
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDoctor = async () => {
    try {
      const res = await getDoctorById(id);
      setDoctor(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchDoctor();
  }, [id]);

  return { doctor, loading, error };
};

export default useDoctor;
