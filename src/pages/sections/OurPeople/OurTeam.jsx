import React from "react";
import James from "../../../assets/images/James_Buskowitz.png";
import Rachel from "../../../assets/images/Rachel_Davis.png";
import Janelle from "../../../assets/images/Janelle_Velillia.png";
import Josef from "../../../assets/images/Josef_Guiterez.png";
import Marc from "../../../assets/images/Marc_Peralta.png";
import Dante from "../../../assets/images/Dante_Macaspac.png";

const teamMembers = [
  {
    name: "James Buskowitz",
    role: "Founder and CEO",
    image: James,
  },
  {
    name: "Rachel Davis",
    role: "Operations Director",
    image: Rachel,
  },
  {
    name: "Janelle Velilla, FMVA",
    role: "Senior Financial Analyst",
    image: Janelle,
  },
  {
    name: "Atty. Karol Josef S. Gutierrez, CPA",
    role: "Corporate Legal Counsel",
    image: Josef,
  },
  {
    name: "Atty. Marc Anthony Peralta",
    role: "Corporate Legal Counsel",
    image: Marc,
  },
  {
    name: "Dante Macaspac",
    role: "Head of Accounting & Administration",
    image: Dante,
  },
];

function OurTeam() {
  return (
    <>
      {/* Title */}
      <h2
        className="text-3xl md:text-3xl lg:text-5xl xl:text-7xl font-semibold text-[#F0AE4F]"
        data-aos="fade-in-zoom"
        data-aos-duration="1000"
      >
        OUR TEAM
      </h2>
      <p
        className="mx-auto mt-4 mb-4 text-center text-sm text-gray-300 sm:text-base"
        data-aos="fade-in-zoom"
        data-aos-duration="1500"
      >
        The Minds Behind Our Innovations
      </p>

      {/* Content */}
      <div
        className="grid grid-cols-2  md:grid-cols-3 max-w-9xl gap-4 justify-items-center hover:ease-in-out"
        data-aos="fade-in-zoom"
        data-aos-duration="2000"
      >
        {teamMembers.map(({ name, role, image }, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 rounded-md md:p-4 max-w-xs md:max-w-full hover:scale-105 transition-all cursor-pointer"
          >
            <img
              src={image}
              alt={`Profile of ${name}`}
              className="mb-2 w-full h-20 object-contain md:h-40" // Reduced height classes
            />
            <p className="text-[9px] md:text-[11px] lg:text-base xl:text-lg font-bold text-gray-300 ">
              {name}
            </p>
            <p className="text-[8px] md:text-[10px] lg:text-sm xl:text-lg  text-[#F0AE4F]">
              {role}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default OurTeam;
