import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    // <section className="py-20 bg-muted" id="contact">
    <section
      className="py-0 md:py-8 pb-4 md:pb-8 relative w-full"
      id="contact"
      style={{
        backgroundImage: `url(/bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    
      {/* Overlay for better readability */}
    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>


      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full">
          تواصل معنا
        </span>

        <h2
          data-aos="zoom-in"
          className="text-2xl md:text-3xl font-bold text-primary mb-4"
        >
          احجز <span className="text-primary">موعدك</span> أو اسألنا
        </h2>

        <p
          data-aos="zoom-in"
          data-aos-delay="100"
          className="text-primary text-sm sm:text-base max-w-2xl mx-auto mb-12"
        >
          لأي استفسار أو حجز موعد، استخدم النموذج أدناه أو بيانات الاتصال الخاصة بالمجمع.
        </p>

        <div className="flex items-center flex-col md:flex-row gap-12">

          

          {/* Contact Info */}
          <div className="space-y-6  text-text-light  sm:w-[35%]" data-aos="zoom-in">
            <div className="flex flex-col justify-center items-center sm:items-start gap-2">
              <h3 className="text-xl font-semibold mb-2 text-primary">الموقع</h3>
              <p className="flex sm:items-center  text-primary sm:gap-2">
                <FaMapMarkerAlt className="text-primary" /> حي المنتزه، المنطقة الشرقية، المملكة العربية السعودية
              </p>
            </div>
            <div className="flex flex-col justify-center items-center sm:items-start gap-2" data-aos-delay="100">
              <h3 className="text-xl font-semibold mb-2 text-primary">الهاتف</h3>
              <p className="flex items-center text-primary gap-2">
                <FaPhoneAlt className="text-primary" /> 053 632 2322
              </p>
            </div>
            <div className="flex flex-col justify-center items-center sm:items-start gap-2" data-aos-delay="200">
              <h3 className="text-xl font-semibold mb-2 text-primary">البريد الإلكتروني</h3>
              <p className="flex items-center text-primary gap-2">
                <FaEnvelope className="text-primary" /> info@opaldiamondclinic.sa
              </p>
            </div>
          </div>


          {/* Contact Form */}
          <form
            data-aos="zoom-in"
            className="bg-white/20 flex-1 backdrop-blur-xl rounded-2xl shadow-xl p-3 md:p-8  space-y-4"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="اسمك"
                className="w-full border border-primary rounded-lg p-3 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full border border-primary rounded-lg p-3 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <input
              type="text"
              placeholder="رقم الهاتف"
              className="w-full border border-primary rounded-lg p-3 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="رسالتك"
              rows="5"
              className="w-full border border-primary rounded-lg p-3 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-text font-semibold py-3 px-6 rounded-xl transition-all duration-300"
            >
              إرسال الرسالة
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
