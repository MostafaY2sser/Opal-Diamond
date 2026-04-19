import axios from "./axios";


export const getDoctors = () => axios.get("/doctors");

export const addDoctor = (data) => axios.post("/admin/doctors", data);

export const getDoctorById = (id) =>
  axios.get(`/doctors/${id}`);

export const updateDoctor = (id, data) => {
  data.append("_method", "PUT"); 
  return axios.post(`/admin/doctors/${id}`, data);
};


export const deleteDoctor = (id) =>
  axios.delete(`/admin/doctors/${id}`);
