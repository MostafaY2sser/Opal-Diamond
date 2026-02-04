import React from "react";
import { FaMicroscope, FaXRay, FaHeartbeat } from "react-icons/fa";
import DeviceCard from "../../components/landing/DeviceCard";
import { devices } from "../../data/devices"


const DevicesSection = () => {
  return (
    <section className="py-10 md:py-20 bg-gray-100" id="devices">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Title */}
        <div className="text-center mb-8 md:mb-14" data-aos="fade-up">
          <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full">
            أجهزتنا الطبية
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-text">
            أحدث الأجهزة الطبية
            <span className="block text-primary mt-2">لخدمة أفضل</span>
          </h2>
        </div>

        {/* Devices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {devices.map((device, index) => (
            <DeviceCard key={device.id} device={device} delay={index * 100} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default DevicesSection;
