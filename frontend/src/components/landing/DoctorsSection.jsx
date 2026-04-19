
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DoctorCard from "./DoctorCard";
import { getDoctors } from "../../api/doctors.api";
import Loader from "../../components/common/Loader";
import {useDoctors} from "../../hooks/doctors/useDoctors";

const DoctorsSection = () => {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "ar";
 const { doctors, loading } = useDoctors();
 


  return (
    <section className="py-10 md:py-20 bg-white" id="doctors">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Title */}
        <div className="text-center mb-8 md:mb-14">
          <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full">
            {t("doctors_badge")}
          </span>

          <h2 className="text-2xl md:text-4xl font-extrabold text-text">
            {t("doctors_title")}
            <span className="block text-primary mt-2">
              {t("doctors_subtitle")}
            </span>
          </h2>
        </div>

        {/* Doctors Grid */}
        { loading 
          ?(
            <div className=""><Loader /></div>
          )
          :( doctors.length === 0
            ?(
              <p className="text-center py-20 text-primary text-3xl w-full">{t("doctors_not_found")}</p>
            )
            :(
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {doctors.map((doctor) => (
                  <DoctorCard
                    key={doctor.id}
                    doctor={doctor}
                    isRTL={isRTL}
                  />
                ))}
              </div>
            )

          )
        }
        

      </div>
    </section>
  );
};

export default DoctorsSection;
