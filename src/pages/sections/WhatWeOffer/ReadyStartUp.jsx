import React from "react";
import ReadyToStart from "../../../assets/images/ReadyToStart.jpg";
function ReadyStartUp() {
  return (
    <>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl">
        {/* Title */}

        <h2
          className="text-center text-3xl font-bold md:text-5xl text-gray-300"
          data-aos="fade-zoom-in"
          data-aos-duration="500"
        >
          READY TO START YOUR <span className="text-[#F0AE4F]"> START UP?</span>
        </h2>
        <p
          className="mx-auto mb-4 mt-4 md:mb-12 lg:mb-16 max-w-5xl text-center text-sm text-gray-300 sm:text-base "
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
        >
          {" "}
          If you've ever dreamed of turning your passion into a thriving
          business, now is the time. Don't let fear or uncertainty hold you
          back.
        </p>
        {/* Content */}
        <div className="flex flex-col-reverse items-center gap-3 lg:flex-row lg:justify-center">
          {/* List */}
          <div className="flex flex-col gap-2 lg:gap-0 xl:gap-10">
            {[
              {
                step: "01",
                title: "One-on-one Mentorship",
                desc: "We help both you and your business progress by sharpening your entrepreneurial skills and refining your strategy with every session.",
                textColor: "text-gray-400",
              },
              {
                step: "02",
                title: "QuickFix Session",
                desc: "We tackle your immediate business problems, providing strategy and remedy.",
                textColor: "text-gray-400",
              },
              {
                step: "03",
                title: "Company Incorporation",
                desc: "We guide you with documentation, strategic place of incorporation, as well as founder protection.",
                textColor: "text-gray-400",
              },
            ].map((item, index) => (
              <a
                key={index}
                className={`flex max-w-lg justify-center gap-2 md:p-3 `}
                href={`#step-${item.step}`}
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="flex h-10 w-10 flex-none items-start justify-center rounded-full text-gray-400">
                  <p className="text-2xl font-medium ">{item.step}</p>
                </div>
                <div className=" flex flex-col gap-2">
                  <h5 className="text-2xl font-bold  text-gray-300">
                    {item.title}
                  </h5>
                  <p className={`text-base text-justify ${item.textColor}`}>
                    {item.desc}
                  </p>
                </div>
              </a>
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
              src={ReadyToStart}
              className="block h-auto w-full max-w-sm lg:max-w-3xl object-fit rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReadyStartUp;
