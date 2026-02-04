
import AboutUs from '@components/landing/AboutUs'
import ContactSection from '@components/landing/ContactSection'
import DevicesSection from '@components/landing/DevicesSection'
import DoctorsSection from '@components/landing/DoctorsSection'
import FAQSection from '@components/landing/FAQSection'
import HeroSection from '@components/landing/HeroSection'
import ServicesSection from '@components/landing/services'
import TestimonialsSection from '@components/landing/TestimonialsSection'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs/>
      <ServicesSection/>
      <DoctorsSection/>
      <DevicesSection/>
      <TestimonialsSection/>
      <FAQSection/>
      <ContactSection />
    </div>
  )
}

export default Home