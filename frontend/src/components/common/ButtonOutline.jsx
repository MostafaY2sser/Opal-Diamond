import classNames from "classnames";

const ButtonOutline = ({ children, href = "#", className }) => {
  return (
    <>
      {/* ====== CSS Animation ====== */}
      <style>{`
        @keyframes shine {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .button-bg {
          background: conic-gradient(
            from 0deg,
            #00f5ff,
            #000,
            #000,
            #00f5ff,
            #000,
            #000,
            #000,
            #00f5ff
          );
          background-size: 300% 300%;
          animation: shine 6s ease-out infinite;
        }
      `}</style>

      <div className="button-bg rounded-lg p-[2px] hover:scale-105 transition-transform duration-300 active:scale-100">
        <a
          href={href}
          className={classNames(
            "inline-block text-sm md:text-lg py-2 px-3 md:px-6 font-semibold rounded-lg transition-all duration-300 border border-white/20 backdrop-blur-lg bg-white/40 text-white hover:bg-white/30 hover:text-white shadow-lg",
            className
          )}
        >
          {children}
        </a>
      </div>
    </>
  );
};

export default ButtonOutline;
