import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import NavLogo from "../../assets/images/bdi-white-nobg.png";
import { PiShoppingCartBold } from "react-icons/pi";

function NavBook({ toggleCart }) {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  // Scroll to the top of the page when the URL changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 shadow-slate-50 bg-[#222222] text-gray-300">
      <div className="container mx-auto flex justify-between items-center h-16 lg:h-20 px-4 ">
        {/* Navbar Logo */}
        <Link to="">
          <img
            src={NavLogo}
            className="w-20 lg:w-40 md:w-24 hover:scale-105 transition-all cursor-pointer"
            alt="Nav Logo"
          />
        </Link>
        {/* Navbar Links */}
        <ul className="hidden md:flex space-x-4 font-medium text-gray-300 uppercase items-center">
          <li className="relative group">
            <Link
              to="/Ebooks/Financial" // Updated path
              className={`p-2 text-xs md:text-sm lg:text-base ${
                isActive("/Ebooks/Financial")
                  ? "text-[#F0AE4F]"
                  : "text-gray-300"
              }`}
            >
              Financial
              <span
                className={`block h-0.5 bg-[#F0AE4F] absolute left-0 bottom-0 top-12 transition-all duration-300 ${
                  isActive("/Ebooks/Financial") ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/Ebooks/Managerial" // Updated path
              className={`p-2 text-xs lg:text-base ${
                isActive("/Ebooks/Managerial")
                  ? "text-[#F0AE4F]"
                  : "text-gray-300"
              }`}
            >
              Managerial
              <span
                className={`block h-0.5 bg-[#F0AE4F] absolute left-0 bottom-0 top-12 transition-all duration-300 ${
                  isActive("/Ebooks/Managerial") ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/Ebooks/Taxation" // Updated path
              className={`p-2 text-xs lg:text-base ${
                isActive("/Ebooks/Taxation")
                  ? "text-[#F0AE4F]"
                  : "text-gray-300"
              }`}
            >
              Taxation
              <span
                className={`block h-0.5 bg-[#F0AE4F] absolute left-0 bottom-0 top-12 transition-all duration-300 ${
                  isActive("/Ebooks/Taxation") ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/Ebooks/Auditing" // Updated path
              className={`p-2 text-xs lg:text-base ${
                isActive("/Ebooks/Auditing")
                  ? "text-[#F0AE4F]"
                  : "text-gray-300"
              }`}
            >
              Auditing
              <span
                className={`block h-0.5 bg-[#F0AE4F] absolute left-0 bottom-0 top-12 transition-all duration-300 ${
                  isActive("/Ebooks/Auditing") ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          </li>
        </ul>
        {/* Navbar Cart */}
        <div className="xl:flex items-center space-x-5">
          <a
            onClick={toggleCart}
            className="hover:text-gray-200 relative cursor-pointer"
          >
            <PiShoppingCartBold className="h-6 w-6" />
          </a>
        </div>
        {/* Mobile Menu Icon */}
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <IoIosMenu size={30} /> : <IoIosClose size={30} />}
        </div>

        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] z-10 h-full border-r border-solid border-gray-800 bg-[#111111] uppercase ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          {/* Navbar Logo */}
          <img
            src={NavLogo}
            className="w-28 sm:w-32 md:w-36 lg:w-40 hover:scale-105 transition-all cursor-pointer m-4"
            alt="Nav Logo"
          />
          <li
            className={`p-4 text-base border-b border-gray-600 ${
              isActive("/") ? "text-[#F0AE4F]" : "text-gray-300"
            }`}
          >
            <Link to="#Financial">Financial</Link>
          </li>
          <li
            className={`p-4 text-base border-b border-gray-600 ${
              isActive("/") ? "text-[#F0AE4F]" : "text-gray-300"
            }`}
          >
            <Link to="/Managerial">Managerial</Link>
          </li>
          <li
            className={`p-4 text-base border-b border-gray-600 ${
              isActive("/") ? "text-[#F0AE4F]" : "text-gray-300"
            }`}
          >
            <Link to="/Taxation">Taxation</Link>
          </li>
          <li
            className={`p-4 text-base border-b border-gray-600 ${
              isActive("/") ? "text-[#F0AE4F]" : "text-gray-300"
            }`}
          >
            <Link to="/Auditing">Auditing</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBook;
