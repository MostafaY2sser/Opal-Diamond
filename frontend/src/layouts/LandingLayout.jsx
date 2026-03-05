import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function LandingLayout() {

  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  

  return (
    <div className="relative">
      <Navbar />
      <main className="min-h-screen ">
        <Outlet />
      </main>

      {/* Whatsapp */}

      <Footer />
      <a
        href="https://wa.me/966536322322"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed 
              bottom-2 md:bottom-6  
              ${isRTL ? 'right-2 md:right-8' : 'left-2 md:left-8' }
              text-5xl bg-green-600 hover:scale-110 transition p-2 md:p-3 rounded-full shadow-md`
            }
      >
        <FaWhatsapp className="w-6 sm:w-8 h-6 md:h-8  text-white" />
      </a>
    </div>
  );
}
