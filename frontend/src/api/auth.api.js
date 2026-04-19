import axios from "./axios";

export const loginAdmin = (data) => {
  return axios.post("/admin/login", data);
};


export const logoutAdmin = () => {
  localStorage.removeItem("token");

  delete axios.defaults.headers.common["Authorization"];
};