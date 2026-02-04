import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { doctors } from "../../data/doctors";
import MainHero from "../../components/common/MainHero";


const DoctorProfile = () => {
  const { id } = useParams(); 
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  // حالة لتخزين الصورة المفتوحة
  const [openCert, setOpenCert] = useState(null);

  if (!doctor) return <p className="text-center py-20">الدكتور غير موجود</p>;

  return (
    <div>
      {/* ===== Hero Section ===== */}
      <MainHero
        title="ملف الطبيب"
        description="تعرف على بيانات الدكتور، تخصصه، خبراته، وشهاداته الطبية الموثقة."
        bgImage="/HeroSection.jpg"
      />

      {/* ===== Doctor Description ===== */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Doctor Img */}
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full md:w-1/2 rounded-2xl object-cover shadow-lg"
            />

            {/* Doctor Info */}
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-primary mb-4">نبذة عن الدكتور</h2>
              <p className="text-primary mb-6">{doctor.name}</p>
              <p className="text-primary mb-6">{doctor.specialty}</p>
              <p className="text-primary mb-6">{doctor.description}</p>
            </div>
          </div>

          {/* Certificates */}
          {doctor.certificates && doctor.certificates.length > 0 && (
            <div className="mt-8">
              <h3 className="text-primary font-bold mb-4">الشهادات</h3>
              <div className="flex flex-wrap gap-4">
                {doctor.certificates.map((cert, index) => (
                  <img
                    key={index}
                    src={cert}
                    alt={`شهادة ${doctor.name} ${index + 1}`}
                    className="w-40 h-28 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setOpenCert(cert)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Overlay */}
      {openCert && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setOpenCert(null)}
        >
          <img
            src={openCert}
            alt="Certificate"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default DoctorProfile;
