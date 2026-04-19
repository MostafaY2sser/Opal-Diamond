
import { useEffect, useTransition } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonFill from "../common/ButtonFill";
import ButtonOutline from "../common/ButtonOutline";
import { useTranslation } from "react-i18next";

const HeroSection = () => {

  const { i18n, t } = useTranslation();

  useEffect(() => {
    AOS.init({ once: true, duration: 900, easing: "ease-out-cubic" });
  }, []);

  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center pt-16 mt-[-90px] px-2"
      style={{
        backgroundImage: `url("/main_bg_hero.jpg")`,
        // backgroundImage: `url("https://webgeek.xyz/healthcarex/images/support4.jpg`,
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div> */}
      <div className="absolute inset-0 bg-[#00000057] backdrop-blur-sm"></div>

      <div className="container relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:px-8 py-20 sm:py-10 lg:py-0">

        {/* ========= Left Side ========= */}
        <div data-aos="fade-left" className="mx-auto text-center sm:text-start">

          <span className="inline-block mb-4 px-3 py-1 sm:py-2 text-sm sm:text-base text-text bg-primary/40 rounded-full">
            {t('center_tagline')}
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-text mb-6">
           {t('center_slogan')}
            <span className="block mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl">
             {t('center_technologies')}
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-text leading-relaxed mb-8 max-w-full sm:max-w-md">
            {t('center_description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <ButtonFill href="/contact">
             {t('book_now')}
            </ButtonFill>
          </div>
        </div>

        {/* ========= Right Side (Info Card) ========= */}
        <div
          data-aos="fade-right"
          className="bg-white/20 backdrop-blur-2xl rounded-3xl shadow-xl p-8 sm:p-10 md:p-12 border border-white/30 max-w-xl"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 sm:mb-8">
            {t('why_choose_us')}
          </h3>

          <ul className="space-y-4 sm:space-y-6 text-text text-sm sm:text-base">

            <li className="flex items-start gap-3 sm:gap-4">
              <span className="text-primary text-lg sm:text-xl">✔</span>
              <span>{t('feature_doctors')}</span>
            </li>

            <li className="flex items-start gap-3 sm:gap-4">
              <span className="text-primary text-lg sm:text-xl">✔</span>
              <span>{t('feature_laser_devices')}</span>
            </li>

            <li className="flex items-start gap-3 sm:gap-4">
              <span className="text-primary text-lg sm:text-xl">✔</span>
              <span>{t('feature_non_surgical')}</span>
            </li>

            <li className="flex items-start gap-3 sm:gap-4">
              <span className="text-primary text-lg sm:text-xl">✔</span>
              <span>{t('feature_followup')}</span>
            </li>

          </ul>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
