import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import NavLogo from "../../assets/images/bdi-white-nobg.png";

function NavBar() {
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
        <Link to="/">
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
              to="/"
              className={`p-2 text-xs md:text-sm lg:text-base ${
                isActive("/") ? "text-[#F0AE4F]" : "text-gray-300"
              }`}
            >
              Our Journey
              <span
                className={`block h-0.5 bg-[#F0AE4F] absolute left-0 bottom-0 top-12 transition-all duration-300 ${
                  isActive("/") ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/ThriveWithUs"
              className={`p-2 text-xs lg:text-base ${
                isActive("/ThriveWithUs") ? "text-[#F0AE4F]" : "text-gray-300"
              }`}
            >
              Thrive with us
              <span
                className={`block h-0.5 bg-[#F0AE4F] absolute left-0 bottom-0 top-12 transition-all duration-300 ${
                  isActive("/ThriveWithUs") ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/WhatWeOffer"
              className={`p-2 text-xs lg:text-base ${
                isActive("/WhatWeOffer") ? "text-[#F0AE4F]" : "text-gray-300"
              }`}
            >
              What we Offer
              <span
                className={`block h-0.5 bg-[#F0AE4F] absolute left-0 bottom-0 top-12 transition-all duration-300 ${
                  isActive("/WhatWeOffer") ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/OurPeople"
              className={`p-2 text-xs lg:text-base ${
                isActive("/OurPeople") ? "text-[#F0AE4F]" : "text-gray-300"
              }`}
            >
              Our People
              <span
                className={`block h-0.5 bg-[#F0AE4F] absolute left-0 bottom-0 top-12 transition-all duration-300 ${
                  isActive("/OurPeople") ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/Ebooks"
              target="_blank"
              className={`p-2 text-xs lg:text-base ${
                isActive("/Ebooks") ? "text-[#F0AE4F]" : "text-gray-300"
              }`}
            >
              Resources
              <span
                className={`block h-0.5 bg-[#F0AE4F] absolute left-0 bottom-0 top-12 transition-all duration-300 ${
                  isActive("/Ebooks") ? "w-full" : "w-0"
                }`}
              ></span>
            </Link>
          </li>
        </ul>
        {/* Navbar Button */}
        <Link
          to="/ContactUs"
          className={`hidden md:flex items-center text-xs lg:text-base space-x-2 uppercase ${
            isActive("/ContactUs") ? "text-[#F0AE4F]" : "text-gray-300"
          } relative group`}
        >
          <BsFillTelephoneFill />
          <span>
            Contact us
            <span
              className={`block h-0.5 bg-[#F0AE4F] absolute left-0 bottom-0 top-12 transition-all duration-300 ${
                isActive("/ContactUs") ? "w-full" : "w-0"
              }`}
            ></span>
          </span>
        </Link>
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
            <Link to="/">Our Journey</Link>
          </li>
          <li
            className={`p-4 text-base border-b border-gray-600 ${
              isActive("/ThriveWithUs") ? "text-[#F0AE4F]" : "text-gray-300"
            }`}
          >
            <Link to="/ThriveWithUs">Thrive with us</Link>
          </li>
          <li
            className={`p-4 text-base border-b border-gray-600 ${
              isActive("/WhatWeOffer") ? "text-[#F0AE4F]" : "text-gray-300"
            }`}
          >
            <Link to="/WhatWeOffer">What we offer</Link>
          </li>
          <li
            className={`p-4 text-base border-b border-gray-600 ${
              isActive("/OurPeople") ? "text-[#F0AE4F]" : "text-gray-300"
            }`}
          >
            <Link to="/OurPeople">Our people</Link>
          </li>
          <li
            className={`p-4 text-base ${
              isActive("/ContactUs") ? "text-[#F0AE4F]" : "text-gray-300"
            }`}
          >
            <Link to="/ContactUs">Contact us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
