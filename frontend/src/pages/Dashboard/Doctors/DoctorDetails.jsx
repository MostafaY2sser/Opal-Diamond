
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "../../../components/common/Loader";
import useDoctor from "../../../hooks/doctors/useDoctor";

const DoctorDetails = () => {
  const { id } = useParams();
  const { doctor, loading, error } = useDoctor(id);
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  if (loading) return <div className="mt-40"><Loader/></div>;
  if (error) return <p>فشل في جلب بيانات الطبيب</p>;
  if (!doctor) return <p>لا يوجد طبيب بهذه البيانات</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h1 className="text-2xl text-primary font-bold mb-4">
            Dr / {isRTL ? doctor.name_ar : doctor.name_en}
          </h1>

          <p className="mb-2 flex text-primary flex-col gap-2">
            <strong>التخصص:</strong>
            {isRTL ? doctor.specialty_ar : doctor.specialty_en}
          </p>

          <p className="mb-4 flex flex-col gap-2 text-primary">
            <strong>الوصف:</strong>
            {isRTL ? doctor.description_ar : doctor.description_en}
          </p>
        </div>

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

      {doctor.certificates?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2 text-primary">
            الشهادات:
          </h2>
          <div className="flex flex-wrap gap-4">
            {doctor.certificates.map((cert) => (
              <img
                key={cert.id}
                src={cert.image}
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
