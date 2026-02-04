import  MainHero from "../../components/common/MainHero"
import ContactSection from "../../components/landing/ContactSection"


const Contact = () => {


  return (
    <div className="">
      <MainHero
        title="تواصل معن"
        description="لأي استفسار أو حجز موعد يمكنك التواصل معنا مباشرة أو إرسال رسالة من خلال النموذج."
        bgImage="/HeroSection.jpg"
      />

      {/* ===== Middle Intro Section ===== */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            نحن هنا لخدمتك دائمًا
          </h2>

          <p className="text-text-light leading-relaxed">
            فريقنا الطبي مستعد للإجابة على جميع استفساراتك وتقديم أفضل رعاية صحية.
            لا تتردد في التواصل معنا أو حجز موعدك الآن.
          </p>

          <div className="mt-6">
            <a
              href="#contact"
              className="bg-primary text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
            >
              تواصل الآن
            </a>
          </div>
        </div>
      </section>

      <ContactSection />

    </div>
  );
};

export default Contact;
