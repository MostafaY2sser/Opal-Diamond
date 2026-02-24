
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MainHero from "../../components/common/MainHero";
import useDevice from "../../hooks/devices/useDevice";
import Loader from "../../components/common/Loader";
// import { devices } from "../../data/devices";

const DeviceInfo = () => {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "ar";
  const { id } = useParams();
  const { device, loading } = useDevice(id);
  const [lightboxImage, setLightboxImage] = useState(null);

  // if (!device) return <p className="text-center py-20">{t("device_not_found")}</p>;

 


  return (
    <div>
      {/* ===== Hero Section ===== */}
      <MainHero
        title={t("device_profile_title")}
        description={t("device_profile_description")}
        bgImage="/main_bg_hero.jpg"
      />


      { loading
        ?(<div className="py-10"><Loader/></div>)
        : (
          <div className="max-w-5xl mx-auto px-4 py-6 sm:py-10">
            <div className="flex flex-col md:flex-row gap-8 mt-6 md:mt-10">
              {/* Device Image */}
              <img
                src={device.image}
                alt={isRTL ? device.name_ar : device.name_en}
                className="w-full md:w-[65%] h-[500px] rounded-2xl object-contain shadow-lg"
              />

              {/* Device Info */}
              <div className="md:w-2/3">
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">{t("device_bio_title")}</h2>
                  <p className="text-primary font-semibold mb-4">
                    {isRTL ? device.name_ar : device.name_en}
                  </p>

                  <p className="text-primary mb-6">
                    {isRTL ? device.description_ar : device.description_en}
                  </p>
                </div>

                {/* Using */}
                <ul className="list-disc pr-5 space-y-2 text-primary px-4">
                  {(isRTL ? device.features_ar : device.features_en)?.map((feature, index) => (
                    <li key={index}>{feature}</li>
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
                        alt={`${isRTL ? device.name_ar : device.name_en} ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => setLightboxImage(img)}
                      />
                    ))}
                  </div>
                </div>
              </section>
            )}
          </div>
        )
      }

      


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
