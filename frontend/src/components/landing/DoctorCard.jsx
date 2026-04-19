
import { useTranslation } from "react-i18next";
import { FaStethoscope } from "react-icons/fa";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor, isRTL }) => {

  const { t } = useTranslation();

  return (
    <div className="bg-muted rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300">

      <div className="h-[350px] overflow-hidden">
        <img
          src={doctor.image}
          alt={isRTL ? doctor.name_ar : doctor.name_en}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-primary mb-1">
          {isRTL ? doctor.name_ar : doctor.name_en}
        </h3>

        <div className="flex justify-center items-center gap-2 text-primary mb-3">
          <FaStethoscope />
          <span>
            {isRTL ? doctor.specialty_ar : doctor.specialty_en}
          </span>
        </div>

        <Link
          to={`/doctors/${doctor.id}`}
          className="inline-block w-full px-6 py-3 bg-primary text-text rounded-xl font-semibold hover:bg-primary-dark transition"
        >
          {t('view_profile')}
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
