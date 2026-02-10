import MainHero from '@components/common/MainHero'
import ContactSection from '@components/landing/ContactSection'

const About = () => {

  return (
    <div>
      {/* ===== Hero Section ===== */}
      <MainHero
        title="من نحن"
        description="نحن مركز متخصص في الليزر والجلدية والتجميل الطبي، ملتزمون بتقديم أفضل رعاية صحية وجمالية لكل عميل باستخدام أحدث الأجهزة الطبية."
        bgImage="/main_bg_hero.jpg"
      />

      {/* ===== Our Vision & Mission ===== */}
      <section className="py-20 bg-muted text-center" data-aos="fade-up" data-aos-delay="100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8" data-aos="fade-down" data-aos-delay="150">
            رؤيتنا ورسالتنا
          </h2>
          <p className="text-primary mb-6" data-aos="fade-right" data-aos-delay="200">
            رؤيتنا هي أن نكون المركز الرائد في المملكة في مجال الليزر والجلدية والتجميل الطبي، من خلال تقديم خدمات عالية الجودة تعتمد على أحدث التقنيات والأجهزة الطبية.
          </p>
          <p className="text-primary" data-aos="fade-left" data-aos-delay="250">
            رسالتنا هي توفير بيئة آمنة ومريحة لكل عملائنا، مع فريق طبي متخصص يضمن حصول كل مراجع على أفضل رعاية صحية وجمالية.
          </p>
        </div>
      </section>

      {/* ===== Our History & Achievements ===== */}
      <section className="py-20 bg-gray-100 text-center" data-aos="fade-up" data-aos-delay="100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10" data-aos="zoom-in" data-aos-delay="150">
            لمحة عن تاريخنا وإنجازاتنا
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/25 backdrop-blur-xl rounded-2xl shadow-md" data-aos="fade-up" data-aos-delay="200">
              <h3 className="font-bold text-primary mb-2">تأسيس المركز</h3>
              <p className="text-text-light">
                نحن مركز حديث متخصص في الليزر والعناية بالبشرة والتجميل الطبي، ملتزمون بتقديم أفضل الخدمات باستخدام أحدث الأجهزة والتقنيات.
              </p>
            </div>

            <div className="p-6 bg-white/25 backdrop-blur-xl rounded-2xl shadow-md" data-aos="fade-up" data-aos-delay="250">
              <h3 className="font-bold text-primary mb-2">أحدث الأجهزة</h3>
              <p className="text-text-light">نوفر أحدث أجهزة الليزر والفحوصات الجلدية لضمان نتائج دقيقة وفعالة لكل مراجع.</p>
            </div>
            <div className="p-6 bg-white/25 backdrop-blur-xl rounded-2xl shadow-md" data-aos="fade-up" data-aos-delay="300">
              <h3 className="font-bold text-primary mb-2">فريقنا الطبي</h3>
              <p className="text-text-light">يضم المركز نخبة من أطباء الجلدية والتجميل المؤهلين، مع خبرة واسعة في مختلف العلاجات الجلدية والتجميلية.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Our Values Section ===== */}
      <section className="py-20 bg-muted" data-aos="fade-up" data-aos-delay="100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12" data-aos="fade-down" data-aos-delay="150">
            قيمنا الأساسية
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-gray-100 backdrop-blur-xl rounded-3xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300" data-aos="zoom-in" data-aos-delay="200">
              <span className="text-4xl text-primary mb-4">🎯</span>
              <h3 className="font-bold text-primary mb-2 text-lg">الجودة الطبية</h3>
              <p className="text-primary text-sm">تقديم أعلى معايير الجودة والأمان في جميع خدمات الليزر والجلدية والتجميل.</p>
            </div>

            {/* Value 2 */}
            <div className="bg-gray-100 backdrop-blur-xl rounded-3xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300" data-aos="zoom-in" data-aos-delay="250">
              <span className="text-4xl text-primary mb-4">🛡️</span>
              <h3 className="font-bold text-primary mb-2 text-lg">بيئة آمنة</h3>
              <p className="text-primary text-sm">توفير بيئة صحية وآمنة لكل عملائنا أثناء جميع الإجراءات الطبية والتجميلية.</p>
            </div>

            {/* Value 3 */}
            <div className="bg-gray-100 backdrop-blur-xl rounded-3xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300" data-aos="zoom-in" data-aos-delay="300">
              <span className="text-4xl text-primary mb-4">💡</span>
              <h3 className="font-bold text-primary mb-2 text-lg">الابتكار</h3>
              <p className="text-primary text-sm">استخدام أحدث التقنيات والأجهزة الطبية المبتكرة لتحقيق أفضل النتائج.</p>
            </div>

            {/* Value 4 */}
            <div className="bg-gray-100 backdrop-blur-xl rounded-3xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300" data-aos="zoom-in" data-aos-delay="350">
              <span className="text-4xl text-primary mb-4">🤝</span>
              <h3 className="font-bold text-primary mb-2 text-lg">الاحترام</h3>
              <p className="text-primary text-sm">معاملة كل مراجع باحترام واهتمام لضمان تجربة علاجية مريحة ومتميزة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <ContactSection />
    </div>
  )
}

export default About;
