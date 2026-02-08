import React from "react";
import ButtonFill from "../common/ButtonFill";

const AboutUs = () => {
  return (
    <section className="py-10 md:py-20 bg-muted" data-aos="fade-up" data-aos-delay="100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

        {/* ===== Content ===== */}
        <div data-aos="fade-left" className="text-center sm:text-start">
          <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full">
            من نحن
          </span>

          <h2 className="text-xl md:text-3xl font-extrabold text-text mb-6 leading-tight text-center sm:text-start">
            مركز متخصص في الليزر والجلدية والتجميل الطبي
            <span className="block text-xl text-primary mt-2 sm:mt-4">
              رعاية متكاملة ونتائج آمنة بمعايير طبية
            </span>
          </h2>

          <p className="text-primary text-sm sm:text-base leading-relaxed mb-8">
            نقدم خدمات متقدمة في علاج مشاكل البشرة والشعر، جلسات الليزر،
            والتجميل غير الجراحي باستخدام أحدث الأجهزة الطبية وبإشراف نخبة من
            أطباء الجلدية المتخصصين، لنمنحك نتائج طبيعية وآمنة تعزز ثقتك بنفسك.
          </p>

          {/* Features */}
          <ul className="space-y-4 mb-10">
            <li className="flex items-center justify-center sm:justify-normal gap-3">
              <span className="text-primary text-xl">✔</span>
              <span>أطباء جلدية وتجميل معتمدون بخبرة طبية عالية</span>
            </li>
            <li className="flex items-center justify-center sm:justify-normal gap-3">
              <span className="text-primary text-xl">✔</span>
              <span>أحدث أجهزة الليزر لإزالة الشعر وعلاج التصبغات والندبات</span>
            </li>
            <li className="flex items-center justify-center sm:justify-normal gap-3">
              <span className="text-primary text-xl">✔</span>
              <span>خطط علاج مخصصة لكل حالة مع متابعة دقيقة</span>
            </li>
          </ul>

          <div className="flex items-center justify-center sm:justify-normal">
            <ButtonFill href='/about'>
              اعرف المزيد
            </ButtonFill>
          </div>
        </div>

        {/* ===== Image ===== */}
        <div className="relative">
          <img
            src="/HeroSection.jpg"
            alt="Laser, Dermatology & Aesthetic Center"
            className="rounded-xl shadow-lg object-cover w-full h-[300px] md:h-[420px]"
            data-aos="fade-right"
          />

          {/* Glass Card */}
          <div className="absolute bottom-2 md:bottom-6 right-2 md:right-6 bg-white/20 backdrop-blur-xl rounded-md md:rounded-2xl p-3 md:p-6 border border-white/30 shadow-lg">
            <p className="text-primary font-semibold text-sm md:text-lg">
              أكثر من 10 سنوات خبرة في الجلدية والليزر
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
