import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProjects } from "../../../hooks/projects/useProjects";


export default function AddProject() {

  const navigate = useNavigate();
  const { addProject, loading, error } = useProjects();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });

    const success = await addProject(data);
    navigate("/dashboard/projects");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-right">إضافة مشروع جديد</h1>

      <form onSubmit={handleSubmit} className="space-y-4 text-right">
        <div>
          <label className="block mb-1 font-semibold">عنوان المشروع</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">الموقع</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">الوصف</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 min-h-[100px]"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">صورة المشروع</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {error && <p className="text-red-600 text-sm">⚠️ {error}</p>}

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={() => navigate("/dashboard/projects")}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            إلغاء
          </button>

          <button
            type="submit"
            disabled={loading}
            className={`px-4 py-2 rounded text-white ${loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
              }`}
          >
            {loading ? "جارٍ الحفظ..." : "حفظ المشروع"}
          </button>
        </div>
      </form>
    </div>
  );
}





