import React from "react";
import HelpOperations from "../../../assets/images/NeedHelpOperations.jpg";
import { Link as SmoothScroll } from "react-scroll";

function YourOperations() {
  const steps = [
    {
      step: "01",
      title: "Accounting",
      desc: "We’ll help make sure your books are perfect by teaching you the accounting system of your choice.",
    },
    {
      step: "02",
      title: "Human Resource",
      desc: "Write a code of conduct aligned with your culture; comply with workplace regulations, and more!",
    },
    {
      step: "03",
      title: "Compliance",
      desc: "Take a backseat as we assist you with your required corporate housekeeping.",
    },
    {
      step: "04",
      title: "Marketing",
      desc: "Leave your marketing to us—we craft and execute strategies that drive your brand's growth.",
    },
  ];

  return (
    <>
      {/* Container */}
      <div id="/Operations" className="mx-auto w-full max-w-7xl">
        {/* Title */}
        <h2
          className="text-center text-3xl font-bold md:text-5xl text-gray-300"
          data-aos="fade-in-zoom"
          data-aos-duration="1000"
        >
          NEED HELP WITH YOUR
          <span className="text-[#F0AE4F]"> OPERATIONS?</span>
        </h2>
        <p
          className="mx-auto mb-4 mt-4 md:mb-12 lg:mb-16 max-w-5xl text-center text-sm text-gray-300 sm:text-base"
          data-aos="fade-in-zoom"
          data-aos-duration="1500"
        >
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
              <div
                key={step.step}
                className="flex max-w-lg justify-center gap-1 border-gray-300 text-black"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="flex h-10 w-10 flex-none items-start justify-center text-gray-400">
                  <p className="text-2xl font-medium">{step.step}</p>
                </div>
                <div className="ml-4 flex flex-col gap-2">
                  <SmoothScroll
                    to={step.step} // Use step.step or step.title as the target ID
                    smooth={true}
                    duration={500}
                    offset={-150} // Adjust offset as needed to align with the top of the page
                    className="text-2xl font-bold text-gray-300 cursor-pointer underline"
                  >
                    {step.title}
                  </SmoothScroll>
                  <p className="text-base text-justify text-gray-400">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div
            className="flex justify-center lg:order-first"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
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
