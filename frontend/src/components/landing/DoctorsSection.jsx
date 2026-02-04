import { FaStethoscope } from "react-icons/fa";
import DoctorCard from "./DoctorCard";
import { doctors } from "../../data/doctors";

const DoctorsSection = () => {
  return (
    <section className="py-10 md:py-20 bg-white" id="doctors">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== Section Title ===== */}
        <div className="text-center mb-8 md:mb-14" data-aos="zoom-in">
          <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full">
            أطباؤنا
          </span>

          <h2 className="text-2xl md:text-4xl font-extrabold text-text">
            نخبة من الأطباء
            <span className="block text-primary mt-2">
              بخبرات متميزة
            </span>
          </h2>
        </div>

        {/* ===== Doctors Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
              <DoctorCard key={doctor.id} doctor={doctor} delay={100} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default DoctorsSection;
