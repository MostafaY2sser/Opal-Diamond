import React, { useState } from "react";
import axios from "../../../api/axios"; 
import { addDevice } from "../../../api/devices"; 
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "../../../components/common/Loader";

export const AddDevices = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar"; 
  const navigate = useNavigate();

  const [nameAr, setNameAr] = useState("");
  const [nameEn, setNameEn] = useState("");
  const [descriptionAr, setDescriptionAr] = useState("");
  const [descriptionEn, setDescriptionEn] = useState("");
  const [featuresAr, setFeaturesAr] = useState([]);
  const [featuresEn, setFeaturesEn] = useState([]);
  const [status, setStatus] = useState("available");
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const formData = new FormData();
    formData.append("name_ar", nameAr);
    formData.append("name_en", nameEn);
    formData.append("description_ar", descriptionAr);
    formData.append("description_en", descriptionEn);
    formData.append("status", status);

    // ابعت كل ميزة كمصفوفة مباشرة
    featuresAr.forEach((feature) => formData.append("features_ar[]", feature));
    featuresEn.forEach((feature) => formData.append("features_en[]", feature));

    if (image) formData.append("image", image);
    if (images.length > 0) {
      Array.from(images).forEach((img) => formData.append("images[]", img));
    }

    await addDevice(formData);
    alert("تم إضافة الجهاز بنجاح");
    navigate("/dashboard/devices");
  } catch (err) {
    console.error(err);
    alert("حدث خطأ أثناء إضافة الجهاز");
  } finally {
    setLoading(false);
  }
};

  const handleFeatureArChange = (e) => {
    setFeaturesAr(e.target.value.split(","));
  };

  const handleFeatureEnChange = (e) => {
    setFeaturesEn(e.target.value.split(","));
  };

  if (loading) return <div className="mt-40"><Loader /></div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold text-primary mb-6">{t("add_device")}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block mb-1 font-semibold">{t("name_ar")}</label>
          <input
            type="text"
            value={nameAr}
            onChange={(e) => setNameAr(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">{t("name_en")}</label>
          <input
            type="text"
            value={nameEn}
            onChange={(e) => setNameEn(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">{t("description_ar")}</label>
          <textarea
            value={descriptionAr}
            onChange={(e) => setDescriptionAr(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">{t("description_en")}</label>
          <textarea
            value={descriptionEn}
            onChange={(e) => setDescriptionEn(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">{t("features_ar")} ({t("comma_separated")})</label>
          <input
            type="text"
            onChange={handleFeatureArChange}
            placeholder='"ميزة1","ميزة2","ميزة3"'
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">{t("features_en")} ({t("comma_separated")})</label>
          <input
            type="text"
            onChange={handleFeatureEnChange}
            placeholder='"feature1","feature2","feature3"'
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">{t("status")}</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="available">{t("available")}</option>
            <option value="maintenance">{t("maintenance")}</option>
            <option value="unavailable">{t("unavailable")}</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">{t("main_image")}</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            accept="image/*"
            className="w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">{t("additional_images")}</label>
          <input
            type="file"
            onChange={(e) => setImages(e.target.files)}
            multiple
            accept="image/*"
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
        >
          {t("add_device")}
        </button>
      </form>
    </div>
  );
};
