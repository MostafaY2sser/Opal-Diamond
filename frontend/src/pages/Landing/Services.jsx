import React from 'react'
import MainHero from '@components/common/MainHero'
import ServicesSection from '@components/landing/services'
import ContactSection from '@components/landing/ContactSection'


const Services = () => {
  return (
    <div>
      {/* ===== Hero Section ===== */}
      <MainHero   
        title="الخدمات"
        description="نقدم مجموعة شاملة من الخدمات الطبية المتكاملة لتلبية جميع احتياجاتك الصحية بأعلى جودة."
        bgImage="/HeroSection.jpg"
      />

      {/* ===== How It Works Section ===== */}
      <section className="py-20 bg-muted text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-primary mb-8"
            data-aos="fade-down"
          >
            كيف تستخدم خدماتنا؟
          </h2>
          <p
            className="text-text-light mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            نحن نسهل عليك الاستفادة من خدماتنا الطبية بخطوات بسيطة وسريعة لضمان راحتك وتجربة ممتازة.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div
              className="bg-white/25 backdrop-blur-xl p-6 rounded-2xl shadow-md"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <h3 className="font-bold text-primary text-xl mb-3">1. اختر الخدمة</h3>
              <p className="text-text-light">تصفح خدماتنا الطبية المتنوعة واختر ما يناسبك.</p>
            </div>
            <div
              className="bg-white/25 backdrop-blur-xl p-6 rounded-2xl shadow-md"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="font-bold text-primary text-xl mb-3">2. احجز موعدك</h3>
              <p className="text-text-light">احجز الموعد مباشرة عبر الموقع بسهولة وأمان.</p>
            </div>
            <div
              className="bg-white/25 backdrop-blur-xl p-6 rounded-2xl shadow-md"
              data-aos="fade-left"
              data-aos-delay="250"
            >
              <h3 className="font-bold text-primary text-xl mb-3">3. استمتع بالخدمة</h3>
              <p className="text-text-light">احصل على الخدمة الطبية بجودة عالية وبأحدث الأجهزة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <ServicesSection />


      {/* ===== Benefits Section ===== */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-primary mb-8"
            data-aos="fade-down"
          >
            لماذا تختار خدماتنا؟
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div
              className="p-6 border rounded-2xl shadow-md"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <h3 className="font-bold text-primary mb-2">أطباء متخصصون</h3>
              <p className="text-text-light">فريقنا من الأطباء والاستشاريين المعتمدين بخبرة عالية.</p>
            </div>
            <div
              className="p-6 border rounded-2xl shadow-md"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="font-bold text-primary mb-2">أجهزة حديثة</h3>
              <p className="text-text-light">نستخدم أحدث الأجهزة الطبية لضمان دقة التشخيص وجودة العلاج.</p>
            </div>
            <div
              className="p-6 border rounded-2xl shadow-md"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <h3 className="font-bold text-primary mb-2">راحة المرضى</h3>
              <p className="text-text-light">نوفر بيئة آمنة ومريحة لضمان تجربة مريحة لكل مراجع.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <ContactSection />
    </div>
  )
}

export default Services
