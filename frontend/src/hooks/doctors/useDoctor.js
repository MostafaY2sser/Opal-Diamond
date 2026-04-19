
import { useQuery } from "@tanstack/react-query";
import { getDoctorById } from "../../api/doctors.api";

const useDoctor = (id) => {
  
  return useQuery({
    queryKey: ["doctor", id],
    queryFn: async () => {
      const res = await getDoctorById(id);
      return res.data;
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};


export default useDoctor;
