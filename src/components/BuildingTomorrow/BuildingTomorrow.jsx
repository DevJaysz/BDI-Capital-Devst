import React from 'react';
import { TbBulb } from "react-icons/tb";
import { SiCloudfoundry } from "react-icons/si";
import { GiGrowth } from "react-icons/gi";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { GiImpactPoint } from "react-icons/gi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";





function BuildingTomorrow() {
  const features = [
    {
      icon: <TbBulb className="w-8 h-8 text-gray-300" />,
      title: 'INNOVATION',
      description: 'Creating new solutions that disrupt and advance traditional methods.',
    },
    {
      icon: <SiCloudfoundry className="w-8 h-8 text-gray-300" />,
      title: 'INCEPTION',
      description: 'The stage where ideas and strats are first developed and outlined.',
    },
    {
      icon: <GiGrowth className="w-8 h-8 text-gray-300" />,
      title: 'INVESTMENT',
      description: 'Allocating capital to fuel growth and expand business capabilities.',
    },
    {
      icon: <FaHandsHoldingCircle className="w-8 h-8 text-gray-300" />,
      title: 'IPO',
      description: 'Investment by offering shares to the public for the first time.',
    },
    {
      icon: <GiImpactPoint className="w-8 h-8 text-gray-300" />,
      title: 'IMPACT',
      description: 'Positive effect a business has on its industry, society, and environment.',
    },
  ];

  return (
    <div className="text-white">
      <div className="flex flex-col items-center justify-center text-center gap-4 pb-6">
        {/* Title */}
        <h2 className="text-2xl md:text-7xl lg:text-6xl font-semibold lg:mb-4">
          BUILDING TOMORROW WITH
        </h2>
        <h2 className="text-2xl md:text-7xl lg:text-6xl font-semibold text-[#F0AE4F] lg:mb-8">
          FEARLESS ENTREPRENEURS
        </h2>
      </div>
      <div className="flex flex-col gap-3 md:flex-row lg:flex-row">
  {features.map((feature, index) => (
    <div
      key={index}
      className={`flex flex-row items-start gap-3 p-4 lg:p-2 w-full md:w-1/2 lg:w-1/4 ${index < features.length - 1 ? 'lg:border-r border-gray-600 pr-4' : ''}`}
    >
      <div className="flex-shrink-0">{feature.icon}</div>
      <div className="flex flex-col ">
        <h3 className="text-sm text-gray-300 mb-2">{feature.title}</h3>
        <p className="text-gray-500 text-xs">{feature.description}</p>
      </div>
    </div>
  ))}
</div>

      <div className="hidden lg:flex justify-center text-5xl lg:text-8xl animate-slow-bounce cursor-pointer  mt-12">
          <MdKeyboardDoubleArrowDown />
        </div>
    </div>
  );
}

export default BuildingTomorrow;
