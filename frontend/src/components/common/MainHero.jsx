import React from "react";

const MainHero = ({ title, subtitle, description, bgImage }) => {
  return (
    <section
      className="relative w-full h-[50vh] sm:min-h-[70vh] flex items-center justify-center text-center text-text mt-[-90px]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative max-w-4xl px-4 mt-20">
        {subtitle && (
          <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold bg-primary/20 rounded-full">
            {subtitle}
          </span>
        )}
        <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-text text-lg md:text-xl max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default MainHero;
