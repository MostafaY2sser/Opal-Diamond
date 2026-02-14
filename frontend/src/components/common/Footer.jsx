

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaSnapchat, FaTiktok } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const socialLinks = [
    { href: "https://www.facebook.com/share/1ArpPY2DFL/", icon: <FaFacebookF /> },
    { href: "https://www.tiktok.com/@opall.diamond?_r=1&_t=zs-93irjgquwfw", icon: <FaTiktok /> },
    { href: "https://www.instagram.com/opall.diamond?igsh=bzRlbG02enVvaWdk", icon: <FaInstagram /> },
    { href: "https://www.snapchat.com/add/opall.diamond?share_id=wIyqzW9TZhc&locale=ar-AE", icon: <FaSnapchat /> },
  ];


  return (
    <footer className="bg-gray-900/90 backdrop-blur-xl text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 text-center md:text-right">

        {/* Logo & Description */}
        <div className="md:col-span-6">
          <img 
            src="/logo.png" 
            alt="logo" 
            className={`w-2/3 mx-auto ${isRTL ? 'mr-10 sm:mr-0' : 'ml-10 sm:ml-0'} sm:w-1/2`}
          />
          <p className={`text-text mb-4 text-center py-6 ${isRTL ? 'sm:text-right pl-0 md:pl-20' : 'sm:text-left pr-0 md:pr-20'}`}>
            {t("footer_description")}
          </p>

          {/* Social Media */}
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

        {/* Contact Info */}
        <div className="md:col-span-3 space-y-4">
          <h3 className={`text-xl font-semibold text-text mb-2 text-center ${isRTL ? 'sm:text-right' : 'sm:text-left'}`}>
            {t("contact_us")}
          </h3>
          <p>
            <a href={t("contact_location_link")} className="flex justify-center md:justify-start gap-2 text-text">
              <FaMapMarkerAlt /> <span className="text-start">{t("contact_location_address")}</span>
            </a>
          </p>
          <a href={`tel:${t("contact_phone")}`} className="flex items-center justify-center md:justify-start gap-2 text-text">
            <FaPhoneAlt />  0536322322
          </a>
          <p className="flex items-center justify-center md:justify-start gap-2 text-text">
            <FaEnvelope /> contact@opaldiamondclinic.com
          </p>
        </div>

        {/* Quick Links */}
        <div className={`md:col-span-3 space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h3 className="text-xl font-semibold text-text mb-2 text-center sm:text-start">{t("quick_links")}</h3>
          <ul className="text-text space-y-2 text-center sm:text-start">
            <li><a href="/about" className="hover:text-primary transition">{t("about_us")}</a></li>
            <li><a href="/services" className="hover:text-primary transition">{t("services")}</a></li>
            <li><a href="/doctors" className="hover:text-primary transition">{t("doctors")}</a></li>
            <li><a href="/contact" className="hover:text-primary transition">{t("contact_us")}</a></li>
          </ul>
        </div>

      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-text text-sm">
        © {new Date().getFullYear()} {t("footer_rights")}
      </div>
    </footer>
  );
};

export default Footer;
