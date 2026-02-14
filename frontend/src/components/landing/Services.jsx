
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";
import ServiceCard from "./ServiceCard";
import { services } from "../../data/services";


const ServicesSection = () => {
  
  const { t } = useTranslation();
  
  return (
    <section
      className="py-10 md:py-20 relative w-full"
      id="services"
      style={{
        backgroundImage: `url(/bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>


      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          data-aos="fade-up"
          className="text-xl md:text-4xl font-extrabold text-primary mb-4"
        >
          {t('services_title')} <span className="text-primary">{t('services_title_highlight')}</span>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-text max-w-2xl mx-auto mb-12 text-base sm:text-lg"
        >
          {t('services_description')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ServiceCard
                key={service.id}
                icon={<Icon className="text-4xl text-primary" />}
                title={t(service.titleKey)}
                description={t(service.descriptionKey)}
                delay={index * 100}
              />
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
