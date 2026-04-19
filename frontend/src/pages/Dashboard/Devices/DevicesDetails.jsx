import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../api/axios"; 
import { useTranslation } from "react-i18next";
import Loader from "../../../components/common/Loader";

export const DevicesDetails = () => {
  const { id } = useParams(); 
  const [device, setDevice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "ar"; 

  useEffect(() => {
    const fetchDevice = async () => {
      try {
        const res = await axios.get(`/equipment/${id}`);
        setDevice(res.data);
      } catch (err) {
        console.error(err);
        setError("فشل في جلب بيانات الجهاز");
      } finally {
        setLoading(false);
      }
    };

    fetchDevice();
  }, [id]);

  if (loading) return <div className="mt-40"><Loader /></div>;
  if (error) return <p>{error}</p>;
  if (!device) return <p>لا يوجد جهاز بهذه البيانات</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* تفاصيل الجهاز */}
        <div>
          <h1 className="text-2xl text-primary font-bold mb-4">
            {isRTL ? device.name_ar : device.name_en}
          </h1>

          <p className="mb-2 flex flex-col gap-2 text-primary">
            <strong>الوصف:</strong> {isRTL ? device.description_ar : device.description_en}
          </p>

          {device.features_ar.length > 0 && (
            <div className="mb-4">
              <strong>المميزات:</strong>
              <ul className="list-disc list-inside text-gray-600 mt-1">
                {(isRTL ? device.features_ar : device.features_en).map((feature, idx) => (
                  <li key={idx}>{feature.replace(/"/g, "")}</li>
                ))}
              </ul>
            </div>
          )}

          <p className="text-sm text-gray-500">
            <strong>الحالة:</strong> {device.status}
          </p>
        </div>

        {/* الصورة الرئيسية */}
        {device.image && (
          <div className="mb-4">
            <img
              src={device.image}
              alt={isRTL ? device.name_ar : device.name_en}
              loading="lazy"
              className="w-full h-64 sm:h-72 object-cover rounded shadow-lg"
            />
          </div>
        )}
      </div>

      {/* الصور الإضافية */}
      {device.images && device.images.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2 text-primary">صور إضافية:</h2>
          <div className="flex flex-wrap gap-4">
            {device.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`صورة ${idx + 1}`}
                loading="lazy"
                className="w-32 h-32 object-cover rounded border"
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
