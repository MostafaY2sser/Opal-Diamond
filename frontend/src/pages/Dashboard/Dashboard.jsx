
import { useTranslation } from "react-i18next";
import useDoctors from "../../hooks/doctors/useDoctors";
import useDevices from "../../hooks/devices/useDevices";
import Loader from "../../components/common/Loader";

const Dashboard = () => {
  const { doctors, loading: loadingDoctors } = useDoctors();
  const { devices, loading: loadingDevices } = useDevices();
  const { t } = useTranslation();

  if (loadingDoctors || loadingDevices) return <Loader />;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-primary mb-6">
        {t("dashboard_welcome")}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Doctors*/}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold text-primary mb-2">
            {t("doctors")}
          </h2>
          <p className="text-3xl font-bold text-primary">{doctors.length}</p>
        </div>

        {/* Devices */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold text-primary mb-2">
            {t("devices")}
          </h2>
          <p className="text-3xl font-bold text-primary">{devices.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;