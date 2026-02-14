
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MainHero from "../../components/common/MainHero";
import { devices } from "../../data/devices";

const DeviceInfo = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const device = devices.find((d) => d.id === parseInt(id));

  const [lightboxImage, setLightboxImage] = useState(null);

  if (!device) return <p className="text-center py-20">{t("device_not_found")}</p>;

  return (
    <div>
      {/* ===== Hero Section ===== */}
      <MainHero
        title={t("device_profile_title")}
        description={t("device_profile_description")}
        bgImage="/main_bg_hero.jpg"
      />

      <div className="max-w-5xl mx-auto px-4 py-6 sm:py-10">
        <div className="flex flex-col md:flex-row gap-8 mt-6 md:mt-10">
          {/* Device Image */}
          <img
            src={device.image}
            alt={t(device.nameKey)}
            className="w-full md:w-[65%] h-[500px] rounded-2xl object-contain shadow-lg"
          />

          {/* Device Info */}
          <div className="md:w-2/3">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">{t("device_bio_title")}</h2>
              <p className="text-primary font-semibold mb-4">{t(device.nameKey)}</p>
              <p className="text-primary mb-6">{t(device.descriptionKey)}</p>
            </div>

            {/* Using */}
            <ul className="list-disc pr-5 space-y-2 text-primary px-4">
              {t(device.usingKey, { returnObjects: true }).map((use, index) => (
                <li key={index}>{use}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* ===== Device Images ===== */}
        {device.images && device.images.length > 0 && (
          <section className="py-10 bg-white">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-primary mb-6">{t("device_images_title")}</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {device.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${t(device.nameKey)} ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setLightboxImage(img)}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* ===== Lightbox Overlay ===== */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage}
            alt="Device Full"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default DeviceInfo;
