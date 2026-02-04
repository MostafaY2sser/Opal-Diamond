import React from "react";
import MainHero from "../../components/common/MainHero";
import DeviceCard from "../../components/landing/DeviceCard";
import { devices } from "../../data/devices";


const Devices = () => {
  return (
    <div>
      {/* Hero Section */}
      <MainHero
        title="الأجهزة الطبية"
        subtitle="معدات حديثة"
        description="نستخدم أحدث الأجهزة الطبية لضمان تشخيص وعلاج دقيق لكل مريض."
        bgImage="/HeroSection.jpg"
      />

      {/* Grid للأجهزة */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {devices.map((device, index) => (
              <DeviceCard key={device.id} device={device} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Devices;
