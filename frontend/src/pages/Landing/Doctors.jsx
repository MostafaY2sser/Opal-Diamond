
import React, { useEffect, useState } from "react";
import MainHero from "../../components/common/MainHero";
import DoctorCard from "../../components/landing/DoctorCard";
import { useTranslation } from "react-i18next";
import { getDoctors } from "../../api/doctors.api";
import Loader from "../../components/common/Loader";
import useDoctors from "../../hooks/doctors/useDoctors";

export const Doctors = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const { doctors, loading } = useDoctors();


  return (
    <div>
      {/* ===== Hero Section ===== */}
      <MainHero
        title={t("doctors_hero_title")}
        subtitle={t("doctors_hero_subtitle")}
        description={t("doctors_hero_description")}
        bgImage="/main_bg_hero.jpg"
      />

      {/* ===== Doctors Grid ===== */}
      <section className="py-20 bg-white" id="doctors">
        <div className="max-w-7xl mx-auto px-4">

          {loading ? (
            <div className="">
              <Loader />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctors.map((doctor, index) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  delay={index * 100}
                  isRTL={isRTL}
                />
              ))}
            </div>
          )}

        </div>
      </section>
    </div>
  );
};
