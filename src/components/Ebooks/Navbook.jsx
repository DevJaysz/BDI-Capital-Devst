import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import NavLogo from "../../assets/images/bdi-white-nobg.png";
import { PiShoppingCartBold } from "react-icons/pi";
import { TiArrowBack } from "react-icons/ti";

function NavBook({ toggleCart, cartNotification }) {
  // State to toggle mobile navigation menu visibility
  const [nav, setNav] = useState(false);

  // React Router's location hook to track the current page URL
  const location = useLocation();

  // Function to toggle the mobile navigation menu open/closed
  const handleNav = () => {
    setNav(!nav);
  };

  // Function to determine if a given path is active (for styling active links)
  const isActive = (path) => location.pathname === path;

  // Scroll to top of the page when URL changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  // Reset the selected option to "Financial" when the user navigates back to the Financial page

  return (
    <nav className="sticky top-0 z-50 shadow-slate-50 bg-[#222222] text-gray-300">
      <div className="container mx-auto flex justify-between items-center h-16 lg:h-20 px-4">
        <div>
          <Link to="/">
            <TiArrowBack className="h-6 w-6 hover:scale-105 transition-all cursor-pointer" />
          </Link>
        </div>
        {/* Logo linking to the homepage */}
        <Link to="#">
          <img
            src={NavLogo}
            className="w-20 lg:w-20 md:w-24 hover:scale-105 transition-all cursor-pointer"
            alt="Nav Logo"
          />
        </Link>

        {/* Cart icon */}
        <div className="hidden xl:flex items-center space-x-5">
          <a
            onClick={toggleCart}
            className="hover:text-gray-200 relative"
            href="#"
          >
            <PiShoppingCartBold className="h-6 w-6 hover:scale-105 transition-all cursor-pointer" />
            {cartNotification && (
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute h-3 w-3 rounded-full bg-[#F0AE4F] opacity-75"></span>
                <span className="relative h-3 w-3 rounded-full bg-[#F0AE4F]"></span>
              </span>
            )}
          </a>
        </div>

        {/* Mobile menu icon */}
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <IoIosMenu size={30} /> : <IoIosClose size={30} />}
        </div>

        {/* Mobile menu (only shown when nav state is true) */}
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] z-10 h-full border-r border-solid border-gray-800 bg-[#111111] uppercase ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          {/* Mobile menu logo */}
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
            <Link to="#Financial">Financials</Link>
          </li>
          <li
            className={`p-4 text-base border-b border-gray-600 ${
              isActive("/") ? "text-[#F0AE4F]" : "text-gray-300"
            }`}
          >
            <Link to="/Managerial">Compliance</Link>
          </li>
          <li
            className={`p-4 text-base border-b border-gray-600 ${
              isActive("/") ? "text-[#F0AE4F]" : "text-gray-300"
            }`}
          >
            <Link to="/Taxation">Corporate Housekeeping</Link>
          </li>
          <li
            className={`p-4 text-base border-b border-gray-600 ${
              isActive("/") ? "text-[#F0AE4F]" : "text-gray-300"
            }`}
          >
            <Link to="/Auditing">Management</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBook;
