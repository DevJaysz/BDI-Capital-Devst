import React from "react";
import Exit from "../../../assets/images/Exit.jpg";
import { Link as SmoothScroll } from "react-scroll";

function TimeToExit() {
  const steps = [
    {
      id: "step-04",
      title: "M&A Buyer & Seller Side",
      desc: "We help you buy or sell your business. BDI Capital has successfully closed $43.5 million in fundraising transactions for its clients.",
    },
    {
      id: "step-05",
      title: "BDI Business Community",
      desc: "We break down the barriers between you and the mentors and investors you’re trying to reach.",
    },
    {
      id: "step-06",
      title: "Wealth Management",
      desc: "We deliver thoughtful investment advisory services.",
    },
  ];

  return (
    <>
      {/* Container */}
      <div id="/Exit" className="mx-auto w-full max-w-7xl">
        {/* Title */}
        <h2
          className="text-center text-3xl font-bold md:text-5xl text-gray-300"
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
        >
          FEEL LIKE IT'S TIME TO <span className="text-[#F0AE4F]"> EXIT?</span>
        </h2>
        <p
          className="mx-auto mb-4 mt-4 md:mb-12 lg:mb-16 max-w-5xl text-center text-sm text-gray-300 sm:text-base"
          data-aos="fade-zoom-in"
          data-aos-duration="1500"
        >
          If you've ever dreamed of turning your passion into a thriving
          business, now is the time. Don't let fear or uncertainty hold you
          back.
        </p>
        {/* Content */}
        <div className="flex flex-col-reverse items-center gap-3 lg:flex-row lg:justify-center">
          {/* List */}
          <div className="flex flex-col gap-2 lg:gap-0 xl:gap-10">
            {steps.map((item, index) => (
              <SmoothScroll
                key={index}
                to="step-04" /* to={item.id} */ //replace if the data is from array
                smooth={true}
                duration={500}
                offset={-150} // Adjust offset as needed
                className="flex max-w-lg gap-2 md:p-3 cursor-pointer"
                data-aos="fade-in-zoom"
                data-aos-duration="1500"
              >
                <div className="flex h-10 w-10 flex-none items-start justify-center rounded-full text-gray-400">
                  <p className="text-2xl font-medium">{item.step}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="text-2xl font-bold text-gray-300 underline">
                    {item.title}
                  </h5>
                  <p
                    className={`text-base text-justify text-gray-400 ${item.textColor}`}
                  >
                    {item.desc}
                  </p>
                </div>
              </SmoothScroll>
            ))}
          </div>

          {/* Image */}
          <div
            className="flex justify-center lg:order-first"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              alt="Placeholder"
              src={Exit}
              className="block h-auto w-full max-w-sm lg:max-w-3xl object-fit rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TimeToExit;
