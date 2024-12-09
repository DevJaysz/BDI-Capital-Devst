import React from "react";

function CallToAction() {
  return (
    <section className="bg-white">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-4 py-14 text-center flex flex-col items-center gap-6">
        <h2 className="max-w-4xl text-3xl font-bold text-gray-300 md:text-5xl">
          Your Ultimate Business Cheat Sheet!
        </h2>
        <p className="max-w-xl text-sm text-gray-400 sm:text-base">
          Learn how the most successful entrepreneurs navigate their businesses
          towards success with our quick and easy guides. Doing business has
          never been simpler!
        </p>
      </div>
    </section>
  );
}

export default CallToAction;
