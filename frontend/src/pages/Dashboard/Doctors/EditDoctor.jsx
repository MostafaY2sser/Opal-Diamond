import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDoctors, updateDoctor } from "../../../api/doctors.api";
import Loader from "../../../components/common/Loader";
import { useTranslation } from "react-i18next";

const EditDoctor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [existingCertificates, setExistingCertificates] = useState([]); 

  const [formData, setFormData] = useState({
    name_ar: "",
    name_en: "",
    specialty_ar: "",
    specialty_en: "",
    description_ar: "",
    description_en: "",
    image: null,
    certificates: [],
  });


  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

  
  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await getDoctors();
        const doctor = res.data.find((d) => d.id === parseInt(id));
        if (!doctor) {
          setMessage("الطبيب غير موجود");
          setLoading(false);
          return;
        }

        setFormData({
          name_ar: doctor.name_ar || "",
          name_en: doctor.name_en || "",
          specialty_ar: doctor.specialty_ar || "",
          specialty_en: doctor.specialty_en || "",
          description_ar: doctor.description_ar || "",
          description_en: doctor.description_en || "",
          image: null,
          certificates: [],
        });

        setExistingCertificates(doctor.certificates || []);

        setPreviewImage(doctor.image || null);
      } catch (err) {
        console.log(err);
        setMessage("فشل في جلب بيانات الطبيب");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      if (name === "certificates") {
        setFormData((prev) => ({ ...prev, certificates: Array.from(files) }));
      } else if (name === "image") {
        setFormData((prev) => ({ ...prev, image: files[0] }));
        setPreviewImage(URL.createObjectURL(files[0]));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    setMessage("");

    try {
      const data = new FormData();
      data.append("name_ar", formData.name_ar);
      data.append("name_en", formData.name_en);
      data.append("specialty_ar", formData.specialty_ar);
      data.append("specialty_en", formData.specialty_en);
      data.append("description_ar", formData.description_ar);
      data.append("description_en", formData.description_en);

      if (formData.image) data.append("image", formData.image);
      formData.certificates.forEach((file, i) =>
        data.append(`certificates[${i}]`, file)
      );

      await updateDoctor(id, data);
      setMessage(t('update_success'));
      navigate("/dashboard/doctors");
      navigate("/dashboard/doctors", { state: { updated: true } });
    } catch (err) {
      console.log(err.response?.data || err);
      setMessage(t('update_failed'));
    } finally {
      setSubmitLoading(false);
    }
  };

  if (loading) return <div className="mt-40"><Loader/> </div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">تعديل بيانات الطبيب</h2>

      {message && <p className="mb-4 text-red-500">{message}</p>}

      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
        <div>
          <label htmlFor="name_ar" className="block mb-1 font-semibold">{t('name_ar')}</label>
          <input
            type="text"
            id="name_ar"
            name="name_ar"
            value={formData.name_ar}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="name_en" className="block mb-1 font-semibold">{t('name_en')}</label>
          <input
            type="text"
            id="name_en"
            name="name_en"
            value={formData.name_en}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="specialty_ar" className="block mb-1 font-semibold"> {t('specialty_ar')}</label>
          <input
            type="text"
            id="specialty_ar"
            name="specialty_ar"
            value={formData.specialty_ar}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="specialty_en" className="block mb-1 font-semibold">{t('specialty_en')} </label>
          <input
            type="text"
            id="specialty_en"
            name="specialty_en"
            value={formData.specialty_en}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="description_ar" className="block mb-1 font-semibold"> {t('description_ar')}</label>
          <textarea
            id="description_ar"
            name="description_ar"
            value={formData.description_ar}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="description_en" className="block mb-1 font-semibold">{t('description_en')} </label>
          <textarea
            id="description_en"
            name="description_en"
            value={formData.description_en}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="image" className="block mb-1 font-semibold"> {t('doctor_image')}</label>
          {previewImage && (
            <img src={previewImage} alt="preview" className="mb-2 w-40 h-40 object-cover rounded" />
          )}
          <input
            type="file"
            id="image"
            name="image"
            accept=".jpg,.jpeg,.png,.webp"
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            {t('certificate')}
          </label>

          <input
            type="file"
            name="certificates"
            multiple
            accept=".jpg,.jpeg,.png,.webp"
            onChange={handleChange}
            className="w-full mb-4"
          />

          <div className="flex flex-wrap gap-4">
              {existingCertificates.map((cert, index) => (
                <div key={`old-${index}`}>
                  <img
                    src={cert.image || cert}
                    alt="Certificate"
                    className="w-24 h-24 object-cover rounded border"
                  />
                </div>
              ))}
            </div>
          </div>


        <button
          type="submit"
          disabled={submitLoading}
          className="bg-primary text-text px-4 py-2 rounded hover:bg-primary-dark transition"
        >
          {submitLoading ? t('loading_doctor') : t('update_doctor')}
        </button>
      </form>
    </div>
  );
};

export default EditDoctor;
