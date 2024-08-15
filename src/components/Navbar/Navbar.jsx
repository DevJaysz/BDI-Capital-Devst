import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import NavLogo from "../../assets/images/NavBar_Logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="sticky top-0 z-50  border-b shadow-slate-50 bg-[#111111]  text-gray-300 ">
      <div className="container mx-auto flex justify-between items-center h-16 lg:h-20 md:h-16 px-4">
        {/* Navbar Logo */}
        <img
          src={NavLogo}
          className="w-20  lg:w-32 md:w-24 hover:scale-105 transition-all cursor-pointer"
          alt=""
        />
        {/* Navbar Links */}
        <ul className="hidden md:flex space-x-4  font-medium text-gray-300 uppercase items-center">
          <Link to="/" className=" p-2 text-xs md:text-sm lg:text-base">
            Our Journey
          </Link>
          <Link to="/ThriveWithUs" className=" p-2 text-xs lg:text-base">
            Thrive with us
          </Link>
          <Link to="/WhatWeOffer" className=" p-2 text-xs lg:text-base">
            What we Offer
          </Link>
          <Link to="/OurPeople" className=" p-2 text-xs lg:text-base">
            Our People
          </Link>
         
        </ul>
        {/* Navbar Button */}
        <button className="hidden md:flex items-center text-xs lg:text-base space-x-2  text-gray-300 uppercase ">
          <BsFillTelephoneFill />
          <span>Contact us</span>
        </button>
        {/* Mobile Menu Icon  */}
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
            alt=""
          />
          <li className="p-4 text-base border-b border-gray-600">
            Our Journey
          </li>
          <li className="p-4 text-base border-b border-gray-600">
            Thrive with us
          </li>
          <li className="p-4 text-base border-b border-gray-600">
            What we offer
          </li>
          <li className="p-4 text-base border-b border-gray-600">Our people</li>
          <li className="p-4 text-base">Contact us</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
