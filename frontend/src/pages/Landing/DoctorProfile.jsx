
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getDoctorById } from "../../api/doctors.api";
import MainHero from "../../components/common/MainHero";
import Loader from "../../components/common/Loader";
import useDoctor from "../../hooks/doctors/useDoctor";

const DoctorProfile = () => {
  
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const { id } = useParams();
  const [openCert, setOpenCert] = useState(null);
  const { doctor, loading } = useDoctor(id);



  return (
    <div>
      <MainHero
        title={t("doctor_profile_title")}
        description={t("doctor_profile_description")}
        bgImage="/main_bg_hero.jpg"
      />

      { loading 
        ?(<div className="py-10"><Loader /></div>)
        : (
          <section className="py-10 md:py-20 bg-white">
            <div className="max-w-5xl mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-8">

                {/* Doctor Img */}
                <img
                  src={doctor.image}
                  alt={isRTL ? doctor.name_ar : doctor.name_en}
                  className="w-full md:w-1/2 h-96 rounded-2xl object-cover shadow-lg"
                />

                {/* Doctor Info */}
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    {t("doctor_bio_title")}
                  </h2>

                  <p className="text-primary sm:text-xl font-semibold mb-6">
                    {isRTL ? doctor.name_ar : doctor.name_en}
                  </p>

                  <p className="text-primary sm:text-xl font-medium mb-6">
                    {isRTL ? doctor.specialty_ar : doctor.specialty_en}
                  </p>

                  <p
                    className="text-primary mb-6 font-medium"
                    style={{ lineHeight: "34px" }}
                  >
                    {isRTL ? doctor.description_ar : doctor.description_en}
                  </p>
                </div>
              </div>

              {/* Certificates */}
              {doctor.certificates && doctor.certificates.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-primary font-bold mb-4">
                    {t("doctor_certificates_title")}
                  </h3>

                  <div className="flex flex-wrap gap-4">
                    {doctor.certificates.map((cert, index) => (
                      <img
                        key={index}
                        src={cert.image}
                        alt="Certificate"
                        className="w-40 h-28 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => setOpenCert(cert)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )
      }
      

      {/* Overlay */}
      {openCert && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setOpenCert(null)}
        >
          <img
            src={openCert}
            alt="Certificate"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default DoctorProfile;
