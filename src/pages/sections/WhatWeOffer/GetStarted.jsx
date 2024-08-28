import React from "react";

function GetStarted() {
  return (
    <>
      {/* Content */}
      <div className="text-center max-w-6xl mx-auto z-10">
        <p
          className="mb-4 text-sm md:text-2xl text-gray-300"
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
        >
          At BDI Capital, we handle the questions that keep you up at night, the
          ones you can't answer, and the tasks you're still figuring out.
        </p>
        <p
          className="mb-8 text-sm md:text-2xl text-gray-300"
          data-aos="fade-zoom-in"
          data-aos-duration="1500"
        >
          We take care of your backend so you can focus on your frontend.
        </p>
        <h1
          className="text-3xl md:text-3xl lg:text-4xl xl:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white"
          data-aos="fade-zoom-in"
          data-aos-duration="2500"
        >
          WELCOME TO YOUR <span className="text-[#F0AE4F]">BUSINESS SHEET</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-evenly gap-6 pt-4 w-full text-gray-300">
          {[
            "I NEED HELP TO GET STARTED",
            "I NEED HELP WITH OPERATIONS",
            "I NEED HELP WITH MY EXIT",
          ].map((text, index) => (
            <button
              key={index}
              className="border-2 border-white rounded-full px-4 py-2 md:px-6 md:py-3 text-sm md:text-lg w-full md:w-auto hover:bg-white hover:text-black transition duration-300"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default GetStarted;
