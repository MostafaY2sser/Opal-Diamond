
import React from "react";
import { useTranslation } from "react-i18next";

const DeviceCard = ({ device, delay = 0 }) => {
  const { t } = useTranslation();

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="bg-white rounded-3xl flex flex-col items-center justify-between shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative w-full h-72 overflow-hidden">
        <img
          src={device.image}
          alt={t(device.nameKey)}
          className="w-full h-full object-contain hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-2 md:p-6 text-center">
        <h3 className="text-base sm:text-lg font-semibold text-primary mb-2">
          {t(device.nameKey)}
        </h3>
        <p className="text-primary text-base mb-6">
          {t(device.descriptionKey)}
        </p>

        <a
          href={`/devices/${device.id}`}
          className="inline-block w-full px-6 py-3 bg-primary text-text rounded-xl sm:font-semibold hover:bg-primary-dark transition"
        >
          {t("device_details")}
        </a>
      </div>
    </div>
  );
};

export default DeviceCard;
