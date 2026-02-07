import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../api/axios"; 
import { useTranslation } from "react-i18next";
import Loader from "../../../components/common/Loader";

const DoctorDetails = () => {
  const { id } = useParams(); 
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
    const { i18n, t } = useTranslation();
    const isRTL = i18n.language === "ar"; 

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await axios.get(`/doctors/${id}`);
        setDoctor(res.data);
      } catch (err) {
        console.error(err);
        setError("فشل في جلب بيانات الطبيب");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  if (loading) return <div className="mt-40"><Loader/> </div>;
  if (error) return <p>{error}</p>;
  if (!doctor) return <p>لا يوجد طبيب بهذه البيانات</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
                <h1 className="text-2xl  text-primary font-bold mb-4"> Dr /  {isRTL ? doctor.name_ar : doctor.name_en}</h1>
                <p className="mb-2 flex  text-primary flex-col gap-2">
                    <strong >التخصص:</strong> 
                    {isRTL ? doctor.specialty_ar : doctor.specialty_en}
                </p>
                <p className="mb-4 flex flex-col gap-2  text-primary">
                    <strong>الوصف:</strong> {isRTL ? doctor.description_ar : doctor.description_en}
                </p>
            </div>
            
            {/* image */}
            {doctor.image && (
                <div className="mb-4">
                <img
                    src={doctor.image}
                    alt={doctor.name_ar}
                    className="w-64 sm:w-96 h-64 sm:h-72 object-cover rounded shadow-lg"
                />
                </div>
            )}

        </div>


      {/* certificates */}
      {doctor.certificates && doctor.certificates.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2  text-primary">الشهادات:</h2>
          <div className="flex flex-wrap gap-4">
            {doctor.certificates.map((cert) => (
              <img
                key={cert.id}
                src={cert.image.startsWith("http") ? cert.image : `${process.env.REACT_APP_API_URL}/storage/${cert.image}`}
                alt="شهادة الطبيب"
                className="w-32 h-32 object-cover rounded border"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorDetails;
