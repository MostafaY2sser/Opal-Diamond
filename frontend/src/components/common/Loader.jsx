// components/Loader.jsx
import React from "react";

const Loader = ({ size = "w-16 h-16", color = "border-blue-500" }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`loader ease-linear rounded-full border-8 border-t-8 border-gray-200 ${color} ${size}`}
      ></div>
    </div>
  );
};

export default Loader;
