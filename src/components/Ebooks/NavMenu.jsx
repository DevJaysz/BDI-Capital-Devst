import React from "react";

// Replace the import statement with your custom cart SVG icon if you have one
import { PiShoppingCartBold } from "react-icons/pi";

function NavMenu({ toggleCart }) {
  //Accepts toggleCart as prop
  return (
    <section className="mx-auto sticky top-0 z-50">
      {/* Navbar */}
      <nav className="shadow-slate-50 bg-[#222222] text-gray-300">
        <div className="container mx-auto flex justify-between items-center h-16 lg:h-20 px-4">
          {/* Logo */}
          <a className="text-3xl font-bold font-heading" href="#">
            Logo Here.
          </a>

          {/* Nav Links */}
          <ul className="hidden md:flex px-4 mx-auto font-heading space-x-12">
            {["Financial", "Managerial", "Taxation", "Auditing"].map((item) => (
              <li key={item}>
                <a className="hover:text-gray-200" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* CartIcon */}
          <div className="hidden xl:flex items-center space-x-5">
            {[
              {
                icon: <PiShoppingCartBold className="h-6 w-6" />,
                notification: true,
              },
            ].map(({ icon, notification }, index) => (
              <a
                onClick={toggleCart}
                key={index}
                className="hover:text-gray-200 relative"
                href="#"
              >
                {icon}
                {notification && (
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute h-3 w-3 rounded-full bg-[#F0AE4F] opacity-75"></span>
                    <span className="relative h-3 w-3 rounded-full bg-[#F0AE4F]"></span>
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Icons */}
        <div className="flex space-x-6 xl:hidden mr-6 items-center">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute h-3 w-3 rounded-full bg-[#F0AE4F] opacity-75"></span>
              <span className="relative h-3 w-3 rounded-full bg-[#F0AE4F]"></span>
            </span>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </a>
        </div>
      </nav>
    </section>
  );
}

export default NavMenu;
