
import axiosClient from "../axiosClient";

export const projectsApi = {
  
  // Get All Projects :-
  getAll: () => axiosClient.get("/projects"),

  // Delete Projects :-
  delete: (id) => axiosClient.delete(`/projects/${id}`),

  // Create Projects :-
  create: (data) =>
    axiosClient.post("/projects", data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  // Updata Projects :-
  update: (id, data) =>
    axiosClient.post(`/projects/${id}?_method=PUT`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
    
};
