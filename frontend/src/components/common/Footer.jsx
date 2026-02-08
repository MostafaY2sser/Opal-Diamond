import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaSnapchat, FaTiktok } from "react-icons/fa";
import { useTranslation } from "react-i18next";


const Footer = () => {

  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "ar";


  return (
    <footer className="bg-gray-900/90 backdrop-blur-xl text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 text-center md:text-right">

        {/* Logo & Description (أكبر جزء) */}
        <div className="md:col-span-6">
          <img src="/logo.png" alt="logo"  className={`w-2/3 mx-auto ${ isRTL ? 'mr-10 sm:mr-0' : 'ml-10 sm:ml-0' }  sm:w-1/2`}/>
          <p className={`text-text mb-4 text-center py-6 ${ isRTL ? 'sm:text-right pl-0 md:pl-20' : 'sm:text-left pr-0 md:pr-20' }`}>
            نقدم رعاية صحية متكاملة باستخدام أحدث الأجهزة والتقنيات الطبية، وبإشراف نخبة من الأطباء المتخصصين.
          </p>
          
          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a href="https://www.facebook.com/share/1ArpPY2DFL/" className="bg-primary p-3 rounded-full text-text hover:bg-primary-dark transition">
              <FaFacebookF />
            </a>
            <a href="https://www.tiktok.com/@opall.diamond?_r=1&_t=zs-93irjgquwfw" className="bg-primary p-3 rounded-full text-text hover:bg-primary-dark transition">
              <FaTiktok />
            </a>
            <a href="https://www.instagram.com/opall.diamond?igsh=bzRlbG02enVvaWdk" className="bg-primary p-3 rounded-full text-text hover:bg-primary-dark transition">
              <FaInstagram />
            </a>
            <a href="https://www.snapchat.com/add/opall.diamond?share_id=wIyqzW9TZhc&locale=ar-AE" className="bg-primary p-3 rounded-full text-text hover:bg-primary-dark transition">
              <FaSnapchat/>
            </a>
          </div>
        </div>

        {/* Contact Info (أصغر) */}
        <div className="md:col-span-3 space-y-4">
          <h3 className={`text-xl font-semibold text-text mb-2  text-center ${ isRTL ? 'sm:text-right' : 'sm:text-left' }`}>تواصل معنا</h3>
          <p className="">
            <a href="https://share.google/wgXwzqDvhuFcmS1To" className="flex items-center justify-center md:justify-start gap-2 text-text">
              <FaMapMarkerAlt /> حي المنتزه، سيهات 32452، المنطقة الشرقية، المملكة العربية السعودية
            </a>
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-text">
            <FaPhoneAlt /> 053 632 2322
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-text">
            <FaEnvelope /> contact@opaldiamondclinic.com
          </p>
        </div>

        {/* Quick Links (أصغر) */}
        <div className={`md:col-span-3 space-y-4 ${ isRTL ? 'text-right' : 'text-left' }`}>
          <h3 className="text-xl font-semibold text-text mb-2 text-center sm:text-start">روابط سريعة</h3>
          <ul className="text-text space-y-2 text-center sm:text-start">
            <li><a href="/about" className="hover:text-primary transition">من نحن</a></li>
            <li><a href="/services" className="hover:text-primary transition">خدماتنا</a></li>
            <li><a href="/doctors" className="hover:text-primary transition">أطباؤنا</a></li>
            <li><a href="/contact" className="hover:text-primary transition">تواصل معنا</a></li>
          </ul>
        </div>

      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-text text-sm">
        © {new Date().getFullYear()} المجمع الطبي. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

export default Footer;
