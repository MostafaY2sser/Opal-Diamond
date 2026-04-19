
import React from "react";
import { useTranslation } from "react-i18next";
import ButtonFill from "../common/ButtonFill";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className="py-10 md:py-20 bg-muted" data-aos="fade-up" data-aos-delay="100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

        {/* ===== Content ===== */}
        <div data-aos="fade-left" className="text-center sm:text-start">

          <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full">
            {t("about_badge")}
          </span>

          <h2 className="text-xl md:text-3xl font-extrabold text-text mb-6 leading-tight text-center sm:text-start">
            {t("about_title")}
            <span className="block text-xl text-primary mt-2 sm:mt-4">
              {t("about_subtitle")}
            </span>
          </h2>

          <p className="text-primary text-sm sm:text-base leading-relaxed mb-8">
            {t("about_description")}
          </p>

          <ul className="space-y-4 mb-10">
            <li className="flex sm:justify-normal gap-3">
              <span className="text-primary text-xl">✔</span>
              <span >{t("about_feature_doctors")}</span>
            </li>

            <li className="flex sm:justify-normal gap-3">
              <span className="text-primary text-xl">✔</span>
              <span>{t("about_feature_devices")}</span>
            </li>

            <li className="flex sm:justify-normal gap-3">
              <span className="text-primary text-xl">✔</span>
              <span>{t("about_feature_plans")}</span>
            </li>
          </ul>

          <div className="flex items-center justify-center sm:justify-normal">
            <ButtonFill href="/about">
              {t("learn_more")}
            </ButtonFill>
          </div>
        </div>

        {/* ===== Image ===== */}
        <div className="relative">
          <img
            src="/main_bg_hero.jpg"
            alt="Laser, Dermatology & Aesthetic Center"
            className="rounded-xl shadow-lg object-cover w-full h-[300px] md:h-[420px]"
            data-aos="fade-right"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
