import NavLogo from "../../../assets/images/NavBar_Logo.png";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useTypewriter, Cursor } from "react-simple-typewriter";

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

  return (
    <>
      <img src={NavLogo} alt="Logo" className="w-48 md:w-80 lg:w-96" />

      <div className="w-full md:max-w-md lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl  text-gray-300">
        <div className="flex items-center justify-between px-4 py-2 h-10 md:h-12 lg:h-12 2xl:h-14 rounded-full border-2 border-gray-300">
          {/* Search Icon */}
          <FaSearch className="text-lg md:text-2xl " />

          {/* Container for the Typewriter Effect */}
          <div className="flex-1 ml-4">
            {/* Align text to the left, making it feel like typing in a real search bar */}
            <h3 className="text-left text-sm md:text-base lg:text-2xl">
              {typeEffect}
              <Cursor cursorStyle="|" />
            </h3>
          </div>

          {/* Microphone Icon */}
          <FaMicrophone className="text-lg md:text-2xl  " />
        </div>
      </div>

      <div className="pt-4 text-center space-y-3 text-gray-300 uppercase text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold">
        <h2>
          need all the
          <span className="text-[#F0AE4F]"> answers</span>?
        </h2>
        <h2> you're in the right place</h2>
        <div className="flex justify-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl cursor-pointer">
          <MdKeyboardDoubleArrowDown />
        </div>
      </div>
    </>
  );
}

export default TypeWriter;
