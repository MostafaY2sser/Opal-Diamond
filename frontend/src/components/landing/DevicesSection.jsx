
import { useTranslation } from "react-i18next";
import DeviceCard from "../../components/landing/DeviceCard";
// import { devices } from "../../data/devices";
import {useDevices} from "../../hooks/devices/useDevices";
import Loader from "../../components/common/Loader";


const DevicesSection = () => {

  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "ar";
  const { devices, loading } = useDevices();

  return (
    <section className="py-10 md:py-20 bg-gray-100" id="devices">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Title */}
        <div className="text-center mb-8 md:mb-14" data-aos="fade-up">
          <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full">
            {t("devices_badge")}
          </span>

          <h2 className="text-2xl md:text-3xl font-extrabold text-text">
            {t("devices_title")}
            <span className="block text-primary mt-2">
              {t("devices_subtitle")}
            </span>
          </h2>
        </div>

        {/* Devices Grid */}
          {loading 
            ? (
              <div className="w-full flex items-center justify-center">
                  <Loader/>
              </div>
            )
            : ( 
              devices.length === 0
              ? (
                <p className="text-center py-20 text-primary text-3xl w-full">{t("devices_not_found")}</p>
              )
              :(
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                      devices.map((device, index) => (
                        <DeviceCard key={device.id} device={device} delay={index * 100} />
                      ))
                    }
                </div>
              )
              
            )
          }

      </div>
    </section>
  );
};

export default DevicesSection;
