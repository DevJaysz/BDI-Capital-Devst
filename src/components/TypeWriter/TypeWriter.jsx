import NavLogo from "../../assets/images/NavBar_Logo.png";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { ReactTyped } from "react-typed";




function TypeWriter() {
  return (
    <>
      <img
        src={NavLogo}
        alt="Logo"
        className="w-48 md:w-80 lg:w-96 pb-4"
      />

      <div className="relative w-full max-w-lg mb-4 text-gray-300">
        <div className=" h-10 w-full rounded-full flex items-center border-2 border-gray-300">
          <FaSearch className="absolute left-4 text-xl lg:text-2xl" />
          <FaMicrophone className="absolute right-4 text-xl lg:text-2xl" />
        </div>
      </div>

      <div className=" text-gray-300 uppercase text-center space-y-3">
        <h2 className="text-2xl md:text-3xl lg:text-4xl ">
          need all the answers?
        </h2>
        <h2 className="text-2xl md:text-2xl lg:text-3xl">
          you're in the right place
        </h2>
        <div className="flex justify-center text-5xl md:text-5xl lg:text-6xl animate-slow-bounce cursor-pointer">
          <MdKeyboardDoubleArrowDown />
        </div>
      </div>
    </>
  );
}

export default TypeWriter;
