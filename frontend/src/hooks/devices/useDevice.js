import { useQuery } from "@tanstack/react-query";
import { getDeviceById } from "../../api/devices";

const useDevice = (id) => {
  return useQuery({
    queryKey: ["device", id],
    queryFn: async () => {
      const res = await getDeviceById(id);
      return res.data;
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};

export default useDevice;