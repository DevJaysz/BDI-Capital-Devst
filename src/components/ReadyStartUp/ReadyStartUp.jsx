import React from "react";

function ReadyStartUp() {
  return (
    <>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl">
        {/* Title */}

        <h2 className="text-center text-3xl font-bold md:text-5xl text-gray-300">
          READY TO START YOUR <span className="text-[#F0AE4F]"> START UP?</span>
        </h2>
        <p className="mx-auto mb-4 mt-4 md:mb-12 lg:mb-16 max-w-lg text-center text-sm text-gray-300 sm:text-base ">
          {" "}
          If you've ever dreamed of turning your passion into a thriving
          business, now is the time. Don't let fear or uncertainty hold you
          back.
        </p>
        {/* Content */}
        <div className="flex flex-col-reverse items-center gap-3 lg:flex-row lg:justify-center">
          {/* List */}
          <div className="flex flex-col gap-0 lg:gap-12">
            {[
              {
                step: "1",
                title: "One-on-one Mentorship",
                desc: "We help both you and your business progress by sharpening your entrepreneurial skills and refining your strategy with every session.",
                textColor: "text-gray-400",
              },
              {
                step: "2",
                title: "QuickFix Session",
                desc: "We tackle your immediate business problems, providing strategy and remedy.",
                textColor: "text-gray-400",
              },
              {
                step: "3",
                title: "Company Incorporation",
                desc: "We guide you with documentation, strategic place of incorporation, as well as founder protection.",
                textColor: "text-gray-400",
              },
            ].map((item, index) => (
              <a
                key={index}
                className={`flex max-w-lg justify-center gap-4 px-3 py-3 `}
                href={`#step-${item.step}`}
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-100">
                  <p className="text-sm font-bold sm:text-base">{item.step}</p>
                </div>
                <div className="ml-4 flex flex-col gap-2">
                  <h5 className="text-sm font-semibold text-gray-300">
                    {item.title}
                  </h5>
                  <p className={`text-xs ${item.textColor}`}>{item.desc}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Image */}
          <div className="flex justify-center lg:order-first">
            <img
              alt="Placeholder"
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              className="block h-auto w-full max-w-sm lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReadyStartUp;
