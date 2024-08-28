import React from "react";
import { TbCards } from "react-icons/tb";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiPencilRuler2Line } from "react-icons/ri";

function OurCore({ title, description, icon }) {
  return (
    <div className="p-6 rounded-md border border-neutral-800 bg-neutral-900/50 text-center shadow-lg">
      <div className="mx-auto flex h-10 w-10 items-center justify-center">
        {icon}
      </div>
      <h3 className="my-4 text-xl text-[#F0AE4F] uppercase font-semibold">
        {title}
      </h3>
      <p className="text-base text-gray-300 text-justify">{description}</p>
    </div>
  );
}

function OurCoreValues() {
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

  return (
    <section className="text-center mx-auto">
      <h2
        className="text-3xl md:text-6xl my-8 font-bold text-[#F0AE4F]"
        data-aos="fade-in-zoom"
        data-aos-duration="1000"
      >
        OUR CORE VALUES
      </h2>
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        data-aos="fade-in-zoom"
        data-aos-duration="2000"
      >
        {features.map((feature, index) => (
          <OurCore
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
      <h2
        className="text-3xl mt-8 text-center text-gray-300"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        “Our mission is to reduce startup failures and empower founders with a
        real chance at success.”
      </h2>
    </section>
  );
}

export default OurCoreValues;
