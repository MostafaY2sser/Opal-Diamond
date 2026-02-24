import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "../../../components/common/Loader";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useDoctors from "../../../hooks/doctors/useDoctors";

const DoctorsList = () => {

  const { doctors, loading, deleteDoctorById } = useDoctors();
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "ar"; 
  const navigate = useNavigate();
  const location = useLocation();

  const handleDelete = async (id) => {
    const confirmDelete = confirm(t("Are you sure , you want to delete this doctor?"));
    if (!confirmDelete) return;

    await deleteDoctorById(id);
  };

  if (loading) return <div className="mt-40"><Loader/> </div>;

  return (
    <div className="p-2">
      <div className="flex items-center justify-between bg-white shadow-md rounded-md p-4 ">
        <h2 className="sm:text-xl text-primary font-bold ">
          {t("doctors")}
        </h2>
        <Link
          to={"/dashboard/add-doctor"}
          className="bg-primary text-center px-4 py-2 rounded-md shadow-sm text-text"
        >
          {t("add_doctors")}
        </Link>
      </div>

      <div className="p-0 mt-8 md:mt-0 md:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => navigate(`/dashboard/doctors/${doctor.id}`)}
            >
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={isRTL ? doctor.name_ar : doctor.name_en}
                  className="w-full h-56 object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg text-primary font-bold mb-1">
                  {isRTL ? doctor.name_ar : doctor.name_en}
                </h3>
                <p className="text-primary mb-2">
                  {isRTL ? doctor.specialty_ar : doctor.specialty_en}
                </p>

                <div className="flex gap-2">
                  <Link
                    to={`/dashboard/edit-doctor/${doctor.id}`}
                    className="flex-1 bg-primary text-text text-center py-2 rounded-md"
                    onClick={(e) => e.stopPropagation()} 
                  >
                    {t("edit")}
                  </Link>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); 
                      handleDelete(doctor.id);
                    }}
                    className="px-3 py-1 flex items-center justify-center border border-red-500 rounded hover:bg-red-700 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H3a1 1 0 100 2h1v10a2 2 0 002 2h6a2 2 0 002-2V6h1a1 1 0 100-2h-2V3a1 1 0 00-1-1H6zm2 4a1 1 0 012 0v8a1 1 0 11-2 0V6zm4 0a1 1 0 10-2 0v8a1 1 0 102 0V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
