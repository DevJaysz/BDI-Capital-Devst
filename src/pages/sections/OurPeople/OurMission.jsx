import React from "react";
import { TbCards } from "react-icons/tb";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiPencilRuler2Line } from "react-icons/ri";

const features = [
  {
    title: "Creating Opportunities",
    description:
      "“Nothing is more powerful than an idea whose time has come,” said Victor Hugo. At BDI Capital we pave the way for entrepreneurs so that now is the time for their idea.",
    icon: <TbCards className="w-10 h-10 text-white" />,
  },
  {
    title: "Working with Integrity",
    description:
      "We take pride in the transparency of working with us. Whether with investors or with entrepreneurs and founders, we take care to execute all actions openly and with the same attentiveness one would give to their most important endeavors, always protecting the trust given to us.",
    icon: <IoBriefcaseOutline className="w-10 h-10 text-white" />,
  },
  {
    title: "Leading in Sustainability",
    description:
      "Born from a sustainable solutions company, BDI Capital partners, invests, and builds companies with sustainability at its core. We believe in solutions that solve global problems both now and for future generations.",
    icon: <RiPencilRuler2Line className="w-10 h-10 text-white" />,
  },
];

function FeatureCard({ title, description, icon }) {
  return (
    <div className="p-6 rounded-md border border-neutral-800 bg-neutral-900/50 text-center shadow-lg">
      <div className="mx-auto flex h-10 w-10 items-center justify-center">
        {icon}
      </div>
      <h3 className="my-4 text-[#F0AE4F] uppercase font-semibold">{title}</h3>
      <p className="text-sm text-gray-300 text-justify">{description}</p>
    </div>
  );
}

function OurMission() {
  return (
    <section id="features" className="flex flex-col items-center py-8 px-4">
      <div className="flex flex-col items-center max-w-4xl text-center">
        <h2 className="text-2xl sm:text-4xl font-bold bg-gradient-to-b from-[#F0AE4F] to-gray-400 bg-clip-text text-transparent">
          OUR MISSION IS TO CREATE FIRST-WORLD INNOVATIONS
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          “We believe that a vital stepping stone is by promoting
          entrepreneurship and innovation. Starting a business shouldn’t be a
          difficult endeavor. We partner early on as you envision your venture.
          <br />
          <br />
          Our experts at BDI Capital have collectively over 50 years of
          experience in investment, financing, and development with companies
          based throughout Europe, South East Asia, and Oceania. We are excited
          to help you on your journey as a fearless entrepreneur and look
          forward to re-imagining the world together.”
        </p>
      </div>

      <h2 className="text-3xl sm:text-4xl my-8 font-bold bg-gradient-to-b from-[#F0AE4F] to-gray-400 bg-clip-text text-transparent">
        OUR CORE VALUES
      </h2>
      <div className="max-w-7xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
      <h2 className="text-3xl mt-8 text-center text-gray-300">
        “It is our mission to lower the fail rate of start-ups and give founders
        and entrepreneurs a real chance at success.”
      </h2>
    </section>
  );
}

export default OurMission;
