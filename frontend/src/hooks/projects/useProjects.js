import { useState } from "react";
import { projectsApi } from "../../api/endpoints/projectsApi";

export const useProjects = () => {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await projectsApi.getAll();
      setProjects(res.data);
    } catch (err) {
      setError("حدث خطأ أثناء جلب المشاريع");
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (id) => {
    if (!confirm("هل أنت متأكد من الحذف؟")) return;
    await projectsApi.delete(id);
    fetchProjects();
  };

  const addProject = async (data) => {
    await projectsApi.create(data);
    fetchProjects();
  };

  const updateProject = async (id, data) => {
    await projectsApi.update(id, data);
    fetchProjects();
  };

  return {
    projects,
    loading,
    error,
    fetchProjects,
    deleteProject,
    addProject,
    updateProject,
  };
};
