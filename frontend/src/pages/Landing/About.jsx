
import MainHero from '@components/common/MainHero';
import ContactSection from '@components/landing/ContactSection';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* ===== Hero Section ===== */}
      <MainHero
        title={t("about_hero_title")}
        description={t("about_hero_description")}
        bgImage="/main_bg_hero.jpg"
      />

      {/* ===== Our Vision & Mission ===== */}
      <section className="py-20 bg-muted text-center" data-aos="fade-up" data-aos-delay="100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8" data-aos="fade-down" data-aos-delay="150">
            {t("about_vision_title")}
          </h2>
          <p className="text-primary mb-6" data-aos="fade-right" data-aos-delay="200">
            {t("about_vision_text")}
          </p>
          <p className="text-primary" data-aos="fade-left" data-aos-delay="250">
            {t("about_mission_text")}
          </p>
        </div>
      </section>

      {/* ===== Our History & Achievements ===== */}
      <section className="py-20 bg-gray-100 text-center" data-aos="fade-up" data-aos-delay="100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10" data-aos="zoom-in" data-aos-delay="150">
            {t("about_history_title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["founding", "latest_devices", "our_team"].map((key, idx) => (
              <div key={key} className="p-6 bg-white/25 backdrop-blur-xl rounded-2xl shadow-md" data-aos="fade-up" data-aos-delay={200 + idx*50}>
                <h3 className="font-bold text-primary mb-2">{t(`about_history_${key}_title`)}</h3>
                <p className="text-text-light">{t(`about_history_${key}_text`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Our Values Section ===== */}
      <section className="py-20 bg-muted" data-aos="fade-up" data-aos-delay="100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12" data-aos="fade-down" data-aos-delay="150">
            {t("about_values_title")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {["quality", "safety", "innovation", "respect"].map((key, idx) => (
              <div key={key} className="bg-gray-100 backdrop-blur-xl rounded-3xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300" data-aos="zoom-in" data-aos-delay={200 + idx*50}>
                <span className="text-4xl text-primary mb-4">{t(`about_values_${key}_icon`)}</span>
                <h3 className="font-bold text-primary mb-2 text-lg">{t(`about_values_${key}_title`)}</h3>
                <p className="text-primary text-sm">{t(`about_values_${key}_text`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <ContactSection />
    </div>
  );
};

export default About;
