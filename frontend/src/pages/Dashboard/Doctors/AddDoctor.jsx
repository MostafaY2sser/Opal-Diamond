import React, { useState } from "react";
import axios from "../../../api/axios";
import { useNavigate } from "react-router-dom";
import { addDoctor } from "../../../api/doctors.api";
import { useTranslation } from "react-i18next";

const AddDoctor = () => {
  const navigate = useNavigate()
  const { t } = useTranslation();
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
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    if (files) {
      if (name === "certificates") {
        setFormData((prev) => ({ ...prev, certificates: Array.from(files) }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: files[0] }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const removeCertificate = (indexToRemove) => {
    setFormData((prev) => ({
      ...prev,
      certificates: prev.certificates.filter(
        (_, index) => index !== indexToRemove
      ),
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const data = new FormData();
    data.append("name_ar", formData.name_ar);
    data.append("name_en", formData.name_en);
    data.append("specialty_ar", formData.specialty_ar);
    data.append("specialty_en", formData.specialty_en);
    data.append("description_ar", formData.description_ar);
    data.append("description_en", formData.description_en);

    if (formData.image) data.append("image", formData.image);
    formData.certificates.forEach((file, index) =>
      data.append(`certificates[${index}]`, file)
    );

    try {
      await addDoctor(data);
      setMessage(t('add_success'));
      setFormData({
        name_ar: "",
        name_en: "",
        specialty_ar: "",
        specialty_en: "",
        description_ar: "",
        description_en: "",
        image: null,
        certificates: [],
      });
      navigate("/dashboard/doctors");
    } catch (err) {
      console.error(err.response?.data || err);
      setMessage(t('add_failed'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6 text-primary">
        {t('add_new_doctor')}
      </h2>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="space-y-4 text-primary"
      >
        {message && (
          <p
            className={`text-center mt-2 ${
              message.includes("نجاح") ? "text-green-600" : "text-red-600"
            } font-semibold`}
          >
            {message}
          </p>
        )}
        
        {/*  Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name_ar" className="block text-primary mb-1">
                  {t('name_ar')}
              </label>
              <input
                type="text"
                id="name_ar"
                name="name_ar"
                value={formData.name_ar}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="name_en" className="block text-primary mb-1">
               {t('name_en')}
              </label>
              <input
                type="text"
                id="name_en"
                name="name_en"
                value={formData.name_en}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
        </div>

        {/*  Specialty */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="specialty_ar" className="block text-primary mb-1">
               {t('specialty_ar')}
              </label>
              <input
                type="text"
                id="specialty_ar"
                name="specialty_ar"
                value={formData.specialty_ar}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="specialty_en" className="block text-primary mb-1">
               {t('specialty_en')}
              </label>
              <input
                type="text"
                id="specialty_en"
                name="specialty_en"
                value={formData.specialty_en}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
        </div>

        {/*  Description AR */}
        <div>
          <label htmlFor="description_ar" className="block text-primary mb-1">
           {t('description_ar')}
          </label>
          <textarea
            id="description_ar"
            name="description_ar"
            value={formData.description_ar}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/*  Description EN */}
        <div>
          <label htmlFor="description_en" className="block text-primary mb-1">
           {t('description_en')}
          </label>
          <textarea
            id="description_en"
            name="description_en"
            value={formData.description_en}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/*  Image */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 mb-2 font-medium">
           {t('doctor_image')}
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            accept=".jpg,.jpeg,.png,.webp"
            className="block w-full text-gray-700 file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-600 file:text-white
                      hover:file:bg-blue-700"
          />
          {formData.image && (
            <div className="mt-3">
              <p className="text-gray-600 mb-1">  {t('preview_image')} :  </p>
              <img
                src={URL.createObjectURL(formData.image)}
                alt="Doctor Preview"
                loading="lazy"
                className="w-32 h-32 object-cover rounded-md border border-gray-300"
              />
            </div>
          )}
        </div>

        {/*  Certificates */}
        <div className="mb-4">
          <label htmlFor="certificates" className="block text-gray-700 mb-2 font-medium">
           {t('certificates_label')}
          </label>
          <input
            type="file"
            id="certificates"
            name="certificates"
            onChange={handleChange}
            multiple
            accept=".jpg,.jpeg,.png,.webp"
            className="block w-full text-gray-700 file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-green-600 file:text-white
                      hover:file:bg-green-700"
          />
          {formData.certificates.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-3">
              {formData.certificates.map((file, index) => (
                <div key={index} className="relative">
                  
                  {/* زرار الحذف */}
                  <button
                    type="button"
                    onClick={() => removeCertificate(index)}
                    className="absolute -top-2 -right-2 bg-red-600 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm hover:bg-red-700 shadow-md"
                  >
                    ×
                  </button>

                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Certificate ${index + 1}`}
                    loading="lazy"
                    className="w-24 h-24 object-cover rounded-md border border-gray-300"
                  />

                  <p className="text-sm text-gray-600 mt-1 text-center">
                    {t('certificate')} {index + 1}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>


        {/* Submit  */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-md text-text font-medium ${
            loading ? "bg-primary cursor-not-allowed" : "bg-primary hover:bg-primary"
          } transition-colors`}
        >
          {loading ? t('adding') : t('add_doctor')}
        </button>


      </form>
    </div>
  );
};

export default AddDoctor;
