
import React from 'react';
import MainHero from '@components/common/MainHero';
import ServicesSection from '@components/landing/services';
import ContactSection from '@components/landing/ContactSection';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* ===== Hero Section ===== */}
      <MainHero   
        title={t("services_hero_title")}
        description={t("services_hero_description")}
        bgImage="/main_bg_hero.jpg"
      />

      {/* ===== How It Works Section ===== */}
      <section className="py-20 bg-muted text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-primary mb-8"
            data-aos="fade-down"
          >
            {t("services_how_it_works_title")}
          </h2>
          <p
            className="text-text-light mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("services_how_it_works_text")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[1,2,3].map((step, idx) => (
              <div
                key={step}
                className="bg-white/25 backdrop-blur-xl p-6 rounded-2xl shadow-md"
                data-aos={idx===0?"fade-right": idx===1?"fade-up":"fade-left"}
                data-aos-delay={150 + idx*50}
              >
                <h3 className="font-bold text-primary text-xl mb-3">{t(`services_step_${step}_title`)}</h3>
                <p className="text-text-light">{t(`services_step_${step}_text`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <ServicesSection />

      {/* ===== Benefits Section ===== */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-primary mb-8"
            data-aos="fade-down"
          >
            {t("services_benefits_title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[1,2,3].map((benefit, idx) => (
              <div
                key={benefit}
                className="p-6 border rounded-2xl shadow-md"
                data-aos="fade-up"
                data-aos-delay={150 + idx*50}
              >
                <h3 className="font-bold text-primary mb-2">{t(`services_benefit_${benefit}_title`)}</h3>
                <p className="text-text-light">{t(`services_benefit_${benefit}_text`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <ContactSection />
    </div>
  )
}

export default Services;
