import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { testimonials } from "../../data/testimonials";


const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const visibleCards = 3; 
  const maxIndex = testimonials.length - visibleCards;

  const handlePrev = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-10 md:py-20" dir="ltr">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full" data-aos="fade-up">
          آراء العملاء
        </span>

        <h2 className="text-xl md:text-3xl font-extrabold text-primary md-8 lg:mb-14" data-aos="fade-up">
          ثقة عملائنا هي سر نجاحنا
        </h2>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(current * 100) / visibleCards}%)`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="px-4 w-full sm:w-1/2 lg:w-[33.3333%] flex-shrink-0 py-2"
              >
                <div
                  className="h-full backdrop-blur-xl border border-white/30 rounded-xl shadow-md p-6"
                  data-aos="fade-up"
                >
                  <div className="flex flex-col items-center mb-6">
                    {/* <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary mb-3"
                    /> */}
                    <h4 className="font-semibold text-primary">{item.name}</h4>
                    {/* <span className="text-sm text-text-light">{item.role}</span> */}
                  </div>
                  <p className="text-text-light leading-relaxed">"{item.comment}"</p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary hover:bg-white/80 text-text hover:text-primary p-3 rounded-full shadow-md"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary hover:bg-white/80 text-text hover:text-primary p-3 rounded-full shadow-md"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
