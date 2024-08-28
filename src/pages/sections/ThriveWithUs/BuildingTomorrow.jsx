import React from "react";
import { TbBulb } from "react-icons/tb";
import { SiCloudfoundry } from "react-icons/si";
import { GiGrowth } from "react-icons/gi";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { GiImpactPoint } from "react-icons/gi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function BuildingTomorrow() {
  const features = [
    {
      icon: <TbBulb className="w-5 h-5  text-gray-300" />,
      title: "INNOVATION",
      description:
        "Creating new solutions that disrupt and advance traditional methods.",
    },
    {
      icon: <SiCloudfoundry className="w-5 h-5  text-gray-300" />,
      title: "INCEPTION",
      description:
        "The stage where ideas and strats are first developed and outlined.",
    },
    {
      icon: <GiGrowth className="w-5 h-5 text-gray-300" />,
      title: "INVESTMENT",
      description:
        "Allocating capital to fuel growth and expand business capabilities.",
    },
    {
      icon: <GiImpactPoint className="w-5 h-5 text-gray-300" />,
      title: "IMPACT",
      description:
        "Positive effect a business has on its industry, society, and environment.",
    },
    {
      icon: <FaHandsHoldingCircle className="w-5 h-5  text-gray-300" />,
      title: "IPO",
      description:
        "Investment by offering shares to the public for the first time.",
    },
  ];

  return (
    <div className="text-white">
      <div className="flex flex-col items-center justify-center text-center gap-4 pb-6">
        {/* Title */}
        <h2
          className=" text-2xl md:text-5xl lg:text-5xl xl:text-7xl font-semibold lg:mb-4"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          BUILDING TOMORROW WITH
        </h2>
        <h2
          className=" text-2xl md:text-5xl lg:text-5xl xl:text-7xl font-semibold text-[#F0AE4F] lg:mb-8"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          FEARLESS ENTREPRENEURS
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-5 lg:grid-cols-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex items-start justify-evenly gap-3 p-2 lg:p-1 ${
              index < features.length - 1
                ? "lg:border-r :border-r-0  border-gray-600"
                : ""
            }`}
            data-aos="fade-zoom-in"
            data-aos-duration="3000"
          >
            <div className="flex-shrink-0 ">{feature.icon}</div>
            <div className="flex flex-col">
              <h3 className="text-sm xl:text-lg font-bold text-gray-300 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-xs xl:text-sm md:hidden lg:flex">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="hidden md:flex justify-center text-5xl lg:text-8xl animate-slow-bounce cursor-pointer  mt-12 animate-bounce"
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
      >
        <MdKeyboardDoubleArrowDown />
      </div>
    </div>
  );
}

export default BuildingTomorrow;
