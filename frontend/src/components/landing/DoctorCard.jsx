import { useTranslation } from "react-i18next";
import { FaStethoscope } from "react-icons/fa";

const DoctorCard = ({ doctor, delay = 0 }) => {

  const { t } = useTranslation();
  
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay={delay}
      className="bg-muted rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300"
    >
      {/* Image */}
      <div className="h-[350px] overflow-hidden">
        <img
          src={doctor.image}
          alt={t(doctor.nameKey)}
          className="w-full h-full object-cover h-96 hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-2 md:p-6 text-center">
        <h3 className="text-base sm:text-xl font-bold text-primary mb-1">{t(doctor.nameKey)}</h3>

        <div className="flex justify-center text-primary text-sm sm:text-base font-normal mb-3">
          <FaStethoscope />
          <span className="">{t(doctor.specialtyKey)}</span>
        </div>

        <a
          href={`/doctors/${doctor.id}`}
          className="inline-block w-full px-6 py-3 bg-primary text-text rounded-xl sm:font-semibold hover:bg-primary-dark transition"
        >
          {t('view_profile')}
        </a>
      </div>
    </div>
  );
};

export default DoctorCard;
