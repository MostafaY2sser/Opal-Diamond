

import { useState } from "react";
import { faqs } from "../../data/faqs";
import { useTranslation } from "react-i18next";

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);
  const { t } = useTranslation();

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      className="py-10 md:py-20 bg-gray-100"
      id="faq"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Tagline */}
        <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full">
          {t("faq_tagline")}
        </span>

        {/* Title */}
        <h2 className="text-lg md:text-3xl font-extrabold text-primary m-8 md:mb-12">
          {t("faq_title")}
        </h2>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4 text-left">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-white/30 rounded-xl bg-text/20 backdrop-blur-xl shadow-md"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-3 md:px-6 py-3 md:py-4 flex justify-between items-center font-semibold text-text"
              >
                <span className="text-primary text-start text-sm sm:text-base">
                  {t(faq.questionKey)}
                </span>
                <span className="text-primary text-2xl">
                  {openId === faq.id ? "-" : "+"}
                </span>
              </button>

              {openId === faq.id && (
                <div className="py-2 px-2 md:px-8 text-sm sm:text-base text-start text-primary">
                  {t(faq.answerKey)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
