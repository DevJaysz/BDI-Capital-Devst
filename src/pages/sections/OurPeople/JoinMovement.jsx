import React from "react";
import { Link } from "react-router-dom";

function JoinMovement() {
  return (
    <div className="container flex flex-col gap-6 items-center mx-auto text-center">
      <h2
        className="max-w-5xl mx-auto text-2xl xl:text-4xl font-semibold tracking-tight text-gray-300 uppercase"
        data-aos="fade-in-zoom"
        data-aos-duration="1000"
      >
        JOIN THE MOVEMENT FOR A{" "}
        <span className="text-[#F0AE4F]">SUSTAINABLE FUTURE </span>
        FOR ALL
      </h2>

      <p
        className="max-w-5xl text-gray-500 dark:text-gray-300"
        data-aos="fade-in-zoom"
        data-aos-duration="1500"
      >
        Be part of a global initiative dedicated to fostering environmental
        stewardship and creating innovative solutions for a sustainable world.
        Together, we can drive meaningful change, protect our planet, and ensure
        a thriving future for generations to come. Join us in making a
        difference today.
      </p>

      <div
        className="flex flex-col gap-4 sm:flex-row sm:gap-6"
        data-aos="fade-in-zoom"
        data-aos-duration="2000"
      >
        <Link
          to="/ContactUs"
          className=" items-center justify-center px-12 py-2 rounded-lg border text-gray-300 hover:bg-white hover:text-black transition duration-300"
        >
          Talk to us
        </Link>
        <Link
          to="/Mentor"
          className=" items-center justify-center px-6 py-2 rounded-lg border text-gray-300 hover:bg-white hover:text-black transition duration-300"
        >
          Meet our Mentors
        </Link>
      </div>
    </div>
  );
}

export default JoinMovement;
