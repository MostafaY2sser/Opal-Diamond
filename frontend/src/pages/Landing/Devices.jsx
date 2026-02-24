
import React from "react";
import MainHero from "../../components/common/MainHero";
import DeviceCard from "../../components/landing/DeviceCard";
import { useTranslation } from "react-i18next";
import useDevices from "../../hooks/devices/useDevices";
import Loader from "../../components/common/Loader";

const Devices = () => {

  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "ar";
  const { devices, loading } = useDevices();

  return (
    <div>
      {/* Hero Section */}
      <MainHero
        title={t("devices_hero_title")}
        subtitle={t("devices_hero_subtitle")}
        description={t("devices_hero_description")}
        bgImage="/main_bg_hero.jpg"
      />

      {loading
        ? (
          <div className="py-10"><Loader/></div>
        )
        :(
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {devices.map((device, index) => (
                  <DeviceCard key={device.id} device={device} delay={index * 100} />
                ))}
              </div>
            </div>
          </section>
        )
      }
      


    </div>
  );
};

export default Devices;
