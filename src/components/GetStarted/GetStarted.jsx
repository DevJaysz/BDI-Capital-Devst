import React from "react";

function GetStarted() {
  return (
    <>
      {/* Content */}
      <div className="relative text-center max-w-4xl mx-auto z-10">
        <p className="mb-4 text-sm sm:text-lg text-gray-300">
          At BDI Capital, we handle the questions that keep you up at night, the
          ones you can't answer, and the tasks you're still figuring out.
        </p>
        <p className="mb-8 text-sm sm:text-lg text-gray-300">
          We take care of your backend so you can focus on your frontend.
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
          WELCOME TO YOUR <span className="text-[#F0AE4F]">BUSINESS SHEET</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-6 pt-4 w-full text-gray-300">
          {[
            "I NEED HELP TO GET STARTED",
            "I NEED HELP WITH OPERATIONS",
            "I NEED HELP WITH MY EXIT",
          ].map((text, index) => (
            <button
              key={index}
              className="border-2 border-white rounded-full px-4 py-2 md:px-6 md:py-3 text-sm md:text-base w-full md:w-auto hover:bg-white hover:text-black transition duration-300"
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
