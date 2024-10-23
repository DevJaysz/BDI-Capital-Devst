import React from "react";

function CallToAction() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-4 py-14 text-center flex flex-col items-center gap-6">
        <h2 className="max-w-3xl text-3xl font-bold text-gray-300 md:text-5xl">
          Stay Ahead with the Latest&nbsp;Accounting Techniques
        </h2>
        <p className="max-w-xl text-sm text-gray-400 sm:text-base">
          Stay informed with the latest accounting trends, enhance your
          expertise, and ensure compliance with changing regulations. Empower
          yourself with tools and knowledge to make smarter financial decisions
          and maintain a competitive edge in the industry.
        </p>
        <a
          href="#"
          className="inline-block px-6 py-3 rounded-lg max-w-xs border text-gray-300 hover:bg-white hover:text-black transition duration-300"
        >
          Shop Now!
        </a>
      </div>
    </section>
  );
}

export default CallToAction;
