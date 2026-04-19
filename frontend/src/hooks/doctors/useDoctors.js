
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getDoctors, deleteDoctor } from "../../api/doctors.api";

export const useDoctors = () => {
  const queryClient = useQueryClient();

  // GET doctors
  const doctorsQuery = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await getDoctors();
      return res.data;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  // DELETE doctor
  const deleteDoctorMutation = useMutation({
    mutationFn: deleteDoctor,
    onSuccess: () => {
      queryClient.invalidateQueries(["doctors"]);
    },
  });

  return {
    doctors: doctorsQuery.data || [],
    loading: doctorsQuery.isLoading,
    error: doctorsQuery.error,
    deleteDoctorById: deleteDoctorMutation.mutate,
    refetch: doctorsQuery.refetch,
  };
};