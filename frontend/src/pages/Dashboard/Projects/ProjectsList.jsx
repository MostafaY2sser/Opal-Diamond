import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { FaPenToSquare } from "react-icons/fa6";
import ButtonFill from "../../../components/common/ButtonFill";
import { useProjects } from "../../../hooks/projects/useProjects";


export default function ProjectsList() {

  const { projects, loading, fetchProjects , deleteProject } = useProjects();

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = (id) => {
    deleteProject(id);
  };

  if (loading) return <p>جاري تحميل البيانات...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">المشروعات</h1>
        <ButtonFill href="/dashboard/projects/add">+ إضافة مشروع</ButtonFill>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200 text-right">
            <th className="p-2 border">#</th>
            <th className="p-2 border">العنوان</th>
            <th className="p-2 border">الموقع</th>
            <th className="p-2 border">الوصف</th>
            <th className="p-2 border">خيارات</th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((p, i) => (
            <tr key={p.id}>
              <td className="border p-2">{i + 1}</td>
              <td className="border p-2">{p.title}</td>
              <td className="border p-2">{p.location}</td>
              <td className="border p-2">{p.description}</td>
              <td className="border p-2 space-x-2 flex items-center justify-center">
                <Link to={`/dashboard/projects/${p.id}/edit`} className="text-blue-600">
                  <FaPenToSquare />
                </Link>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="text-red-600"
                >
                  <AiOutlineDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
