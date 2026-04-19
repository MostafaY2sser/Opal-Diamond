
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getDevices, deleteDevice } from "../../api/devices";

export const useDevices = () => {
  const queryClient = useQueryClient();

  // GET Devices
  const devicesQuery = useQuery({
    queryKey: ["devices"],
    queryFn: async () => {
      const res = await getDevices();
      return res.data;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });



  const deleteDeviceMutation = useMutation({
    mutationFn: deleteDevice,
    onSuccess: () => {
      queryClient.invalidateQueries(["devices"]);
    },
  });

  return {
    devices: devicesQuery.data || [],
    loading: devicesQuery.isLoading,
    error: devicesQuery.error,
    deleteDeviceById: deleteDeviceMutation.mutate,
    refetch: devicesQuery.refetch,
  };
};