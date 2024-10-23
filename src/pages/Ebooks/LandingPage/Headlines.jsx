import React from "react";
import Landingpage from "../../../assets/images/Landinpage.jpg"; // Make sure this path is correct

function Headlines() {
  return (
    <section
      className="overflow-hidden bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${Landingpage})` }} // Using the imported image
    >
      <div className="bg-black/50">
        <div className="container mx-auto w-full px-4 py-8 flex flex-col items-start justify-center sm:text-left gap-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Boost Your Business with <br /> Smarter Accounting
          </h2>

          <p className="hidden max-w-lg text-white/90 md:block md:text-lg md:leading-relaxed">
            Leverage advanced software and best practices to streamline your
            accounting processes. Unlock your potential by making informed
            decisions that drive productivity and success.
          </p>

          <div className="flex justify-center">
            <a
              href="#"
              className="inline-block px-12 py-3 text-sm font-medium rounded-lg max-w-xs border text-gray-300 hover:bg-white hover:text-black transition duration-300 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Yours Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Headlines;
