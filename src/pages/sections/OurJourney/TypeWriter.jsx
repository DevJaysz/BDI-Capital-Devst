import NavLogo from "../../../assets/images/NavBar_Logo.png";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";

function TypeWriter() {
  const [typeEffect] = useTypewriter({
    words: [
      "Is my idea good?",
      "How do I secure funding?",
      "What is finance?",
      "What is compliance?",
      "How do I exit?",
    ],
    loop: {},
    typeSpeed: 20,
    deleteSpeed: 30,
  });

  const [showText, setShowText] = useState(false);
  const [showSubText, setShowSubText] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    AOS.init();
    const timer = setTimeout(() => {
      setShowText(true);
      const subTextTimer = setTimeout(() => {
        setShowSubText(true);
        const arrowTimer = setTimeout(() => {
          setShowArrow(true);
        }, 500); // Delay for the arrow to appear
        return () => clearTimeout(arrowTimer); // Cleanup the timer
      }, 500); // Delay for the subtext to appear
      return () => clearTimeout(subTextTimer); // Cleanup the timer
    }, 5000); // Delay in milliseconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <>
      <img
        src={NavLogo}
        alt="Logo"
        className="w-48 md:w-80 lg:w-96"
        data-aos="fade-down"
        data-aos-duration="1500"
      />

      <div className="w-full md:max-w-md lg:max-w-xl xl:max-w-2xl text-gray-300">
        <div
          className="flex items-center justify-between px-4 py-2 h-10 md:h-12 lg:h-12 2xl:h-14 rounded-full border-2 border-gray-300"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <FaSearch className="text-lg md:text-2xl" />
          <div className="flex-1 ml-4">
            <h3 className="text-left text-sm md:text-base lg:text-2xl">
              {typeEffect}
              <Cursor cursorStyle="|" />
            </h3>
          </div>
          <FaMicrophone className="text-lg md:text-2xl" />
        </div>
      </div>

      <div className="pt-4 text-center space-y-3">
        <h2
          className={`text-gray-300 uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold transition-opacity duration-1000 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
          style={{ visibility: showText ? "visible" : "hidden" }}
        >
          need all the
          <span className="text-[#F0AE4F]"> answers</span>?
        </h2>
        <h2
          className={`text-gray-300 uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold transition-opacity duration-1000 ${
            showSubText ? "opacity-100" : "opacity-0"
          }`}
          style={{ visibility: showSubText ? "visible" : "hidden" }}
        >
          you're in the right place
        </h2>
        <div
          className={`flex justify-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-gray-300  animate-bounce transition-opacity duration-1000 ${
            showArrow ? "opacity-100" : "opacity-0"
          }`}
          style={{ visibility: showArrow ? "visible" : "hidden" }}
        >
          <MdKeyboardDoubleArrowDown className="cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default TypeWriter;
