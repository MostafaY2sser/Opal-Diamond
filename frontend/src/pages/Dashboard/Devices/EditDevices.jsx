import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDevices, updateDevice } from "../../../api/devices";
import Loader from "../../../components/common/Loader";
import { useTranslation } from "react-i18next";

const EditDevices = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name_ar: "",
    name_en: "",
    description_ar: "",
    description_en: "",
    features_ar: [],
    features_en: [],
    status: "available",
    image: null,
    images: [],
  });

  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    const fetchDevice = async () => {
      try {
        const res = await getDevices();
        const device = res.data.find((d) => d.id === parseInt(id));
        if (!device) {
          setMessage("الجهاز غير موجود");
          setLoading(false);
          return;
        }

        setFormData({
          name_ar: device.name_ar || "",
          name_en: device.name_en || "",
          description_ar: device.description_ar || "",
          description_en: device.description_en || "",
          features_ar: device.features_ar || [],
          features_en: device.features_en || [],
          status: device.status || "available",
          image: null,
          images: [],
        });

        setPreviewImage(device.image ? `${process.env.REACT_APP_API_URL}/storage/${device.image}` : null);
      } catch (err) {
        console.log(err);
        setMessage("فشل في جلب بيانات الجهاز");
      } finally {
        setLoading(false);
      }
    };

    fetchDevice();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      if (name === "images") {
        setFormData((prev) => ({ ...prev, images: Array.from(files) }));
      } else if (name === "image") {
        setFormData((prev) => ({ ...prev, image: files[0] }));
        setPreviewImage(URL.createObjectURL(files[0]));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFeaturesArChange = (e) => {
    setFormData((prev) => ({ ...prev, features_ar: e.target.value.split(",").map(f => f.trim()) }));
  };

  const handleFeaturesEnChange = (e) => {
    setFormData((prev) => ({ ...prev, features_en: e.target.value.split(",").map(f => f.trim()) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    setMessage("");

    try {
      const data = new FormData();
      data.append("name_ar", formData.name_ar);
      data.append("name_en", formData.name_en);
      data.append("description_ar", formData.description_ar);
      data.append("description_en", formData.description_en);
      data.append("status", formData.status);

      formData.features_ar.forEach((f) => data.append("features_ar[]", f));
      formData.features_en.forEach((f) => data.append("features_en[]", f));

      if (formData.image) data.append("image", formData.image);
      formData.images.forEach((file, i) => data.append(`images[${i}]`, file));

      await updateDevice(id, data);

      setMessage(t("update_success"));
      navigate("/dashboard/devices", { state: { updated: true } });
    } catch (err) {
      console.log(err.response?.data || err);
      setMessage(t("update_failed"));
    } finally {
      setSubmitLoading(false);
    }
  };

  if (loading) return <div className="mt-40"><Loader /></div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{t("edit_device")}</h2>

      {message && <p className="mb-4 text-red-500">{message}</p>}

      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">{t("name_ar")}</label>
          <input
            type="text"
            name="name_ar"
            value={formData.name_ar}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">{t("name_en")}</label>
          <input
            type="text"
            name="name_en"
            value={formData.name_en}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">{t("description_ar")}</label>
          <textarea
            name="description_ar"
            value={formData.description_ar}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">{t("description_en")}</label>
          <textarea
            name="description_en"
            value={formData.description_en}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">{t("features_ar")} ({t("comma_separated")})</label>
          <input
            type="text"
            value={formData.features_ar.join(",")}
            onChange={handleFeaturesArChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder='"ميزة1","ميزة2"'
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">{t("features_en")} ({t("comma_separated")})</label>
          <input
            type="text"
            value={formData.features_en.join(",")}
            onChange={handleFeaturesEnChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder='"feature1","feature2"'
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">{t("status")}</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="available">{t("available")}</option>
            <option value="maintenance">{t("maintenance")}</option>
            <option value="unavailable">{t("unavailable")}</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">{t("main_image")}</label>
          {previewImage && (
            <img src={previewImage} alt="preview" className="mb-2 w-40 h-40 object-cover rounded" />
          )}
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">{t("additional_images")}</label>
          <input
            type="file"
            name="images"
            multiple
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <button
          type="submit"
          disabled={submitLoading}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
        >
          {submitLoading ? t("loading") : t("update_device")}
        </button>
      </form>
    </div>
  );
};

export default EditDevices;
