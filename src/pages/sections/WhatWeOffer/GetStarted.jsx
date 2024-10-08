import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function GetStarted() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Adjust the offset value as needed
        const offset = 350; // Change this value to fit your needs
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [hash]);

  // Define scroll links and their target sections
  const scrollLinks = {
    "I NEED HELP TO GET STARTED": "/ReadyStartUp",
    "I NEED HELP WITH OPERATIONS": "/Operations",
    "I NEED HELP WITH MY EXIT": "/Exit",
  };

  return (
    <>
      {/* Content */}
      <div id="GetStarted" className="text-center max-w-6xl mx-auto z-10">
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
        <div className="flex flex-col md:flex-row justify-evenly gap-6 pt-4 w-full text-gray-300 ">
          {Object.entries(scrollLinks).map(([text, id]) => (
            <ScrollLink
              key={text}
              to={id}
              smooth={true}
              duration={500}
              offset={-200}
              className="border-2 border-white rounded-full px-4 py-2 md:px-6 md:py-3 text-sm md:text-lg w-full md:w-auto hover:bg-white hover:text-black cursor-pointer transition duration-300"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              {text}
            </ScrollLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default GetStarted;
