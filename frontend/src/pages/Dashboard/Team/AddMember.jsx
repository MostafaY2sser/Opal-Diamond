import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usePost from "../../../hooks/common/usePost";
import ButtonFill from "../../../components/common/ButtonFill";

export default function AddMember() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    image: null,
  });

  const { postData, loading, error } = usePost();
  const navigate = useNavigate();

  // التعامل مع التغيرات في الحقول
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // إرسال البيانات
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("position", form.position);
    if (form.image) formData.append("image", form.image);

    try {
      await postData("/team", formData, true);
      alert("تمت إضافة العضو بنجاح ✅");
      navigate("/dashboard/members"); // رجوع بعد الإضافة
    } catch (err) {
      console.error("Error adding member:", err);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg p-6 rounded-2xl">
      <h1 className="text-2xl font-bold mb-4 text-center">إضافة عضو جديد</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">الاسم</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">الوظيفة</label>
          <input
            type="text"
            name="position"
            value={form.position}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">الصورة</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            className="w-full border rounded-lg p-2"
          />
        </div>

        <ButtonFill type="submit" disabled={loading}>
          {loading ? "جاري الإرسال..." : "إضافة العضو"}
        </ButtonFill>

        {error && <p className="text-red-600 text-center mt-2">{error}</p>}
      </form>
    </div>
  );
}
