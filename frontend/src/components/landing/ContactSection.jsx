
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {

  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const url = "https://api.sheety.co/a7a71a57c2972ffac923691f94c95be5/opalMessages/sheet1";

    const now = new Date();
    const formattedDate =
      now.getFullYear() +
      "-" +
      String(now.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(now.getDate()).padStart(2, "0") +
      " " +
      String(now.getHours()).padStart(2, "0") +
      ":" +
      String(now.getMinutes()).padStart(2, "0");


    const body = {
      sheet1: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        date: formattedDate,
      },
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      console.log(data);

      alert(t('message_sent_successfully'));

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert(t('error_sending_message'));
    }

    setLoading(false);
  };


  return (
    <section
      className="py-0 md:py-8 pb-4 md:pb-8 relative w-full"
      id="contact"
      style={{
        backgroundImage: `url(/bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Tagline */}
        <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full">
          {t("contact_tagline")}
        </span>

        {/* Title */}
        <h2
          data-aos="zoom-in"
          className="text-2xl md:text-3xl font-bold text-primary mb-4"
        >
          {t("contact_title_prefix")}{" "}
          <span className="text-primary">{t("contact_title_highlight")}</span>{" "}
          {t("contact_title_suffix")}
        </h2>

        {/* Description */}
        <p
          data-aos="zoom-in"
          data-aos-delay="100"
          className="text-primary text-sm sm:text-base max-w-2xl mx-auto mb-12"
        >
          {t("contact_description")}
        </p>

        <div className="flex items-center flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:w-[35%]" data-aos="zoom-in">
            <div className="flex flex-col justify-center items-center sm:items-start gap-2">
              <h3 className="text-xl font-semibold mb-2 text-primary">{t("contact_location")}</h3>
              <p>
                <a
                  href="https://share.google/wgXwzqDvhuFcmS1To"
                  className="flex text-primary text-center sm:text-start sm:gap-2"
                >
                  <FaMapMarkerAlt className="text-primary" /> {t("contact_location_address")}
                </a>
              </p>
            </div>

            <div className="flex flex-col justify-center items-center sm:items-start gap-2" data-aos-delay="100">
              <h3 className="text-xl font-semibold mb-2 text-primary">{t("contact_phone")}</h3>
              <a href="tel:0536322322" className="flex items-center text-primary gap-2">
                <FaPhoneAlt className="text-primary" /> 0536322322
              </a>
            </div>

            <div className="flex flex-col justify-center items-center sm:items-start gap-2" data-aos-delay="200">
              <h3 className="text-xl font-semibold mb-2 text-primary">{t("contact_email")}</h3>
              <a 
                href="mailto:contact@opaldiamondclinic.com" 
                className="flex items-center text-primary gap-2"
              >
                <FaEnvelope className="text-primary" /> contact@opaldiamondclinic.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/20 flex-1 backdrop-blur-xl rounded-2xl shadow-xl p-3 md:p-8 space-y-4"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact_form_name")}
                className="w-full border border-primary rounded-lg p-3 bg-white/50"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact_form_email")}
                className="w-full border border-primary rounded-lg p-3 bg-white/50"
                required
              />
            </div>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("contact_form_phone")}
              className="w-full border border-primary rounded-lg p-3 bg-white/50"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contact_form_message")}
              rows="5"
              className="w-full border border-primary rounded-lg p-3 bg-white/50"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary-dark text-text font-semibold py-3 px-6 rounded-xl transition-all duration-300"
            >
              {loading ? t("sending") : t("contact_form_submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;



















