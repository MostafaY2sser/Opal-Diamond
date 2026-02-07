import axios from "./axios";

export const loginAdmin = (data) => {
  return axios.post("/admin/login", data);
};
