import { useState, useEffect } from "react";
import { NavLink  } from "react-router-dom";
import { FaBars, FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes, FaTwitter } from "react-icons/fa";
import i18n from "i18next";
import { useTranslation } from "react-i18next";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "ar";


  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
        className={`p-2 sm:p-4 sticky top-0 z-50 transition-colors duration-200 ${
          scrolled
            ? "bg-white shadow-md"
            // : "bg-white/10 backdrop-blur-md"
            : "bg-primary/20 backdrop-blur-md"
        }`}
      >

      <nav className="relative flex justify-between items-center max-w-7xl mx-auto">

        <div className="flex items-center gap-6">
        {/* Logo */}
          <NavLink  to="/">
            <img 
              src="/logo.png" 
              alt="logo" 
              className="w-32 sm:w-40"
            />
          </NavLink >
          {/* Desktop Menu */}
            <ul
              className={`hidden md:flex gap-6 font-normal text-base transition-colors duration-200 py-2 ${
                scrolled ? "text-gray-700" : "text-text"
              }`}
            >
              <li>
                <NavLink  to="/" className={({ isActive }) =>
                  `hover:text-primary transition ${
                    isActive ? "text-primary active font-bold" : ""
                  }`
                }>
                  {t('home')}
                </NavLink >
              </li>
              <li>
                <NavLink  to="/about" className={({ isActive }) =>
                  `hover:text-primary transition ${
                    isActive ? "text-primary active font-bold" : ""
                  }`
                }>
                {t('about')}
                </NavLink >
              </li>
              <li>
                <NavLink  to="/services" className={({ isActive }) =>
                  `hover:text-primary transition ${
                    isActive ? "text-primary active font-bold" : ""
                  }`
                }>
                  {t('services')}
                </NavLink >
              </li>
              <li>
                <NavLink  to="/doctors" className={({ isActive }) =>
                  `hover:text-primary transition ${
                    isActive ? "text-primary active font-bold" : ""
                  }`
                }>
                  {t('doctors')}
                </NavLink >
              </li>
              <li>
                <NavLink  to="/devices" className={({ isActive }) =>
                  `hover:text-primary transition ${
                    isActive ? "text-primary active font-bold" : ""
                  }`
                }>
                  {t('devices')}
                </NavLink >
              </li>
              <li>
                <NavLink  to="/contact" className={({ isActive }) =>
                  `hover:text-primary transition ${
                    isActive ? "text-primary active font-bold" : ""
                  }`
                }>
                  {t('contact')}
                </NavLink >
              </li>
            </ul>
          </div>

        <div className="flex gap-5 items-center">
          
          {/* Toggle Lang */}
          <button
            className={`text-text font-semibold sm:border-2 border-primary p-1 sm:p-2 rounded-xl  ${isRTL ? 'ml-10 sm:ml-0' : 'mr-10 sm:mr-0'  }`}
            onClick={() => {
              const newLang = i18n.language === "ar" ? "en" : "ar";
              i18n.changeLanguage(newLang);
              localStorage.setItem("lang", newLang);
            }}
          >
            {i18n.language === "ar" ? "EN" : "AR"}
          </button>

          {/* Social Media Links */}
          <div className="hidden md:flex justify-center md:justify-start gap-4 ">
            <a href="#" className="bg-primary p-3 rounded-full text-text hover:bg-primary-dark transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-primary p-3 rounded-full text-text hover:bg-primary-dark transition">
              <FaTwitter />
            </a>
            <a href="#" className="bg-primary p-3 rounded-full text-text hover:bg-primary-dark transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-primary p-3 rounded-full text-text hover:bg-primary-dark transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`absolute md:hidden top-[20%] ${ isRTL ? 'left-2' : 'right-2' }  z-20 text-2xl transition-colors duration-200 ${
            scrolled ? "text-primary" : "text-white"
          }`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes className="text-primary" /> : <FaBars className="text-primary" />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center text-xl font-semibold text-gray-700 transition-transform duration-200 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center gap-8">
            <li>
              <NavLink  to="/" onClick={closeMenu} className="hover:text-primary">
                الرئيسية
              </NavLink >
            </li>
            <li>
              <NavLink 
                to="/about"
                onClick={closeMenu}
                className="hover:text-primary"
              >
                نبذة عنا
              </NavLink >
            </li>
            <li>
              <NavLink 
                to="/services"
                onClick={closeMenu}
                className="hover:text-primary"
              >
                الخدمات
              </NavLink >
            </li>
            <li>
              <NavLink 
                to="/doctors"
                onClick={closeMenu}
                className="hover:text-primary"
              >
                الاطباء
              </NavLink >
            </li>
            <li>
              <NavLink 
                to="/devices"
                onClick={closeMenu}
                className="hover:text-primary"
              >
                الاجهزة
              </NavLink >
            </li>
            <li>
              <NavLink 
                to="/contact"
                onClick={closeMenu}
                className="hover:text-primary"
              >
                تواصل معنا
              </NavLink >
            </li>
          </ul>
          {/* Social Media Links */}
          <div className="md:hidden flex justify-center md:justify-start gap-4 mt-10">
            <a href="#" className="bg-primary p-3 rounded-full text-text hover:bg-primary-dark transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-primary p-3 rounded-full text-text hover:bg-primary-dark transition">
              <FaTwitter />
            </a>
            <a href="#" className="bg-primary p-3 rounded-full text-text hover:bg-primary-dark transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-primary p-3 rounded-full text-text hover:bg-primary-dark transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
