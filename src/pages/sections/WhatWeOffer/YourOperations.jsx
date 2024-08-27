import React from "react";
import HelpOperations from "../../../assets/images/NeedHelpOperations.jpg";

function YourOperations() {
  const steps = [
    {
      step: "01",
      title: "Accounting",
      desc: "We’ll help make sure your books are perfect by teaching you the accounting system of your choice.",
      href: "#w-tabs-0-data-w-pane-0",
    },
    {
      step: "02",
      title: "Human Resource",
      desc: "Write a code of conduct aligned with your culture; comply with workplace regulations, and more!",
      href: "#w-tabs-0-data-w-pane-1",
    },
    {
      step: "03",
      title: "Compliance",
      desc: "Take a backseat as we assist you with your required corporate housekeeping.",
      href: "#w-tabs-0-data-w-pane-2",
    },
    {
      step: "04",
      title: "Marketing",
      desc: "Leave your marketing to us—we craft and execute strategies that drive your brand's growth.",
      href: "#w-tabs-0-data-w-pane-2",
    },
  ];

  return (
    <>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold md:text-5xl text-gray-300">
          NEED HELP WITH YOUR
          <span className="text-[#F0AE4F]"> OPERATIONS?</span>
        </h2>
        <p className="mx-auto mb-4 mt-4 md:mb-12 lg:mb-16 max-w-5xl text-center text-sm text-gray-300 sm:text-base ">
          {" "}
          If you've ever dreamed of turning your passion into a thriving
          business, now is the time. Don't let fear or uncertainty hold you
          back.
        </p>
        {/* Content */}
        <div className="flex flex-col-reverse items-center gap-6 lg:flex-row lg:justify-center">
          {/* List */}
          <div className="flex flex-col gap-4">
            {steps.map((step) => (
              <a
                key={step.step}
                className="flex max-w-lg justify-center gap-1 border-gray-300 text-black"
                href={step.href}
              >
                <div className="flex h-10 w-10 flex-none items-start justify-center text-gray-400 ">
                  <p className="text-2xl font-medium">{step.step}</p>
                </div>
                <div className="ml-4 flex flex-col gap-2">
                  <h5 className="text-2xl font-bold  text-gray-300">
                    {step.title}
                  </h5>
                  <p className="text-base text-justify  text-gray-400">
                    {step.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Image */}
          <div className="flex justify-center lg:order-first">
            <img
              alt=""
              src={HelpOperations}
              className="block h-auto w-full max-w-xs lg:max-w-5xl rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default YourOperations;