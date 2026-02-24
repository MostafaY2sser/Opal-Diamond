import axios from "./axios";

// Get All Devices
export const getDevices = () => axios.get("/equipment");

// Get Single Device
export const getDeviceById = (id) =>
  axios.get(`/equipment/${id}`);


// Add Devices
export const addDevice = (data) => axios.post("/admin/equipment", data);

// Update Devices
export const updateDevice = (id, data) => {
  data.append("_method", "PUT");
  return axios.post(`/admin/equipment/${id}`, data);
};

// Delete Devices
export const deleteDevice = (id) =>
  axios.delete(`/admin/equipment/${id}`);
