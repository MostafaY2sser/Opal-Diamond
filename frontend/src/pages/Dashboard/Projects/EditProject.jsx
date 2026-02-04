import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../hooks/common/useFetch";
import { useProjects } from "../../../hooks/projects/useProjects";


export default function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getData } = useFetch();
  const { updateProject, loading, error } = useProjects();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const loadProject = async () => {
      const data = await getData(`/projects/${id}`);
      if (data) {
        setFormData({
          title: data.title,
          location: data.location,
          description: data.description,
          image: null,
        });
        setPreview(data.image ? `/storage/${data.image}` : null);
      }
    };
    loadProject();
  }, [id]);

  const handleChange = (e) => {
    const { name, type, files, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));

    if (type === "file" && files[0]) {
      setPreview(URL.createObjectURL(files[0]));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("title", formData.title);
    form.append("location", formData.location);
    form.append("description", formData.description);
    if (formData.image) form.append("image", formData.image);

    const success = await updateProject(id, form); 
    navigate("/dashboard/projects"); 
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-right">تعديل المشروع</h1>

      <form onSubmit={handleSubmit} className="space-y-4 text-right">
        <div>
          <label className="block mb-1 font-semibold">عنوان المشروع</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="أدخل عنوان المشروع"
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
            placeholder="أدخل موقع المشروع"
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
            placeholder="أدخل وصف المشروع"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">صورة المشروع</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {preview && (
            <img src={preview} alt="Preview" className="mt-2 h-40 object-cover rounded" />
          )}
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
              className={`px-4 py-2 rounded text-white ${
                loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "جارٍ الحفظ..." : "حفظ التعديلات"}
            </button>

        </div>
      </form>
    </div>
  );
}
