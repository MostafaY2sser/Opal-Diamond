import React from "react";
import MainHero from "../../components/common/MainHero";
import DoctorCard from "../../components/landing/DoctorCard";
import { doctors } from "../../data/doctors";

export const Doctors = () => {
  return (
    <div>
      {/* ===== Hero Section ===== */}
      <MainHero
        title="أطباؤنا"
        subtitle="الخبراء الطبيون"
        description="تعرف على نخبة الأطباء المتخصصين في مختلف التخصصات الطبية لضمان أفضل رعاية صحية."
        bgImage="/main_bg_hero.jpg"
      />

      {/* ===== Doctors Grid ===== */}
      <section className="py-20 bg-white" id="doctors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
                <DoctorCard  key={doctor.id} doctor={doctor} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
