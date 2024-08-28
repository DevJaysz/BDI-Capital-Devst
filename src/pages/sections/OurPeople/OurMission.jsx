import React from "react";

function OurMission() {
  return (
    <section id="features" className="flex flex-col items-center ">
      <div className="flex flex-col items-center gap-12 text-center">
        <h2
          className="text-2xl md:text-5xl font-bold bg-gradient-to-b from-[#F0AE4F] to-gray-400 bg-clip-text text-transparent"
          data-aos="fade-in-zoom"
          data-aos-duration="1000"
        >
          OUR MISSION IS TO CREATE FIRST-WORLD INNOVATIONS
        </h2>
        <p
          className="text-lg text-gray-300 max-w-6xl"
          data-aos="fade-in-zoom"
          data-aos-duration="1500"
        >
          “We believe that a vital stepping stone is by promoting
          entrepreneurship and innovation. Starting a business shouldn’t be a
          difficult endeavor. We partner early on as you envision your venture.
          <br />
          <br />
          Our experts at BDI Capital have collectively over 50 years of
          experience in investment, financing, and development with companies
          based throughout Europe, South East Asia, and Oceania. We are excited
          to help you on your journey as a fearless entrepreneur and look
          forward to re-imagining the world together.”
        </p>
      </div>
    </section>
  );
}

export default OurMission;
