import axiosClient from "../axiosClient";

const authApi = {
  login: (credentials) => axiosClient.post("/admin/login", credentials),
  logout: () => axiosClient.post("/admin/logout"),
};

export default authApi;
