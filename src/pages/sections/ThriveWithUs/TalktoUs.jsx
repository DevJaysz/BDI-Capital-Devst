import React from "react";
import { Link } from "react-router-dom";

function TalktoUs() {
  return (
    <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
      <h2
        className="max-w-5xl mx-auto text-2xl xl:text-5xl  font-semibold tracking-tight text-gray-300 uppercase "
        data-aos="fade-zoom-in"
        data-aos-duration="1000"
      >
        Bring your Business to the{" "}
        <span className="text-[#F0AE4F]">next level.</span>
      </h2>

      <p
        className="max-w-4xl mt-6 text-gray-500 dark:text-gray-300"
        data-aos="fade-zoom-in"
        data-aos-duration="2000"
      >
        Journey with us from day one as we create and develop the DNA of your
        new venture, turning your vision into a thriving reality. Together,
        we'll build a strong foundation, innovate with purpose, and guide your
        business every step of the way.
      </p>

      <Link
        to="/ContactUs"
        className="inline-flex items-center justify-center w-full px-6 py-2 mt-6  rounded-lg sm:w-auto border text-gray-300 hover:bg-white hover:text-black transition duration-300"
        data-aos="fade-zoom-in"
        data-aos-duration="3000"
      >
        Talk to us
      </Link>
    </div>
  );
}

export default TalktoUs;
