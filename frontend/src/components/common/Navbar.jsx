import { useState, useEffect } from "react";
import { NavLink  } from "react-router-dom";
import { FaBars, FaFacebookF, FaInstagram, FaLinkedinIn, FaSnapchat, FaTiktok, FaTimes, FaTwitter } from "react-icons/fa";
import { useTranslation } from "react-i18next";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "ar";


  const menuLinks = [
  { path: "/", label: t("home") },
    { path: "/about", label: t("about") },
    { path: "/services", label: t("services") },
    { path: "/doctors", label: t("doctors") },
    { path: "/devices", label: t("devices") },
    { path: "/contact", label: t("contact") },
  ];

  const socialLinks = [
    { href: "https://www.facebook.com/share/1ArpPY2DFL/", icon: <FaFacebookF /> },
    { href: "https://www.tiktok.com/@opall.diamond?_r=1&_t=zs-93irjgquwfw", icon: <FaTiktok /> },
    { href: "https://www.instagram.com/opall.diamond?igsh=bzRlbG02enVvaWdk", icon: <FaInstagram /> },
    { href: "https://www.snapchat.com/add/opall.diamond?share_id=wIyqzW9TZhc&locale=ar-AE", icon: <FaSnapchat /> },
  ];

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
            // : "bg-primary/20 backdrop-blur-md"
            : ""
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
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `hover:text-primary transition ${
                        isActive ? "text-text bg-primary active  px-4 rounded-full py-1 hover:text-text" : ""
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
          </ul>
          </div>

        <div className="flex gap-5 items-center">
          
          {/* Toggle Lang */}
          <button
            className={`text-text font-semibold sm:border-2 border-primary p-1 sm:p-2 rounded-xl  ${isRTL ? 'ml-10 md:ml-0' : 'mr-10 md:mr-0'  }`}
            onClick={() => {
              const newLang = i18n.language === "ar" ? "en" : "ar";
              i18n.changeLanguage(newLang);
              localStorage.setItem("lang", newLang);
            }}
          >
            {i18n.language === "ar" ? "EN" : "AR"}
          </button>

          {/* Social Media Links */}
          <div className="hidden md:flex justify-center md:justify-start gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="bg-primary p-3 rounded-full text-text hover:bg-primary-dark transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
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
          {isOpen ? <FaTimes className="text-primary" /> : <FaBars className={`${scrolled ? 'text-primary' : 'text-text'}`} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center text-xl font-semibold text-gray-700 transition-transform duration-200 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center gap-8">
            {menuLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  onClick={closeMenu}
                  // className="hover:text-primary"
                  className={({ isActive }) =>
                      `hover:text-primary transition ${
                        isActive ? "text-text bg-primary active px-4 rounded-full py-1 hover:text-text" : ""
                      }`
                    }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          
          {/* Social Media Links */}
          <div className="md:hidden flex justify-center md:justify-start gap-4 mt-10">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="bg-primary p-3 rounded-full text-text hover:bg-primary-dark transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
