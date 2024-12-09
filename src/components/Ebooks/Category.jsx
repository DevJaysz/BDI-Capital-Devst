import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function Category({ onCategorySelect }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const handleCategoryClick = (category) => {
    // Toggle between the selected category and "All"
    const newCategory = activeCategory === category ? "All" : category;

    setActiveCategory(newCategory);
    onCategorySelect(newCategory); // Notify parent about the selected category
    setActiveDropdown(null); // Close the dropdown
  };

  return (
    <div className="sticky top-20 bg-gray-50 dark:bg-[#222222] z-20 shadow-md">
      <nav className="bg-[#222222]">
        <div className="max-w-screen-xl flex flex-wrap justify-center items-center mx-auto p-2">
          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-[#222222] cursor-pointer">
              {/* Financial Dropdown */}
              <li className="relative group">
                <button
                  onClick={() => toggleDropdown("financial")}
                  className={`flex items-center justify-between w-full py-2 px-3 rounded  md:hover:bg-transparent md:p-0 md:w-auto hover:text-[#F0AE4F] ${
                    activeCategory === "Financial"
                      ? "hover:text-[#F0AE4F] border-b-2 "
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  Financial
                  <IoMdArrowDropdown />
                </button>

                {activeDropdown === "financial" && (
                  <div className="absolute left-0 mt-2 z-10 font-normal bg-white divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                      {["Finance", "Taxation", "Accounting"].map((sub) => (
                        <li key={sub}>
                          <button
                            onClick={() => handleCategoryClick(sub)}
                            className={`block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                              activeCategory === sub
                                ? "font-semibold text-[#F0AE4F]"
                                : ""
                            }`}
                          >
                            {sub}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>

              {/* Compliance Category */}
              <li className="relative">
                <a
                  onClick={() => handleCategoryClick("Compliance")}
                  className={`relative block py-2 px-3 rounded md:border-0 md:p-0 hover:text-[#F0AE4F] ${
                    activeCategory === "Compliance"
                      ? "text-[#F0AE4F] "
                      : "dark:text-white"
                  }`}
                >
                  Compliance
                </a>
              </li>

              {/* Corporate Housekeeping */}
              <li className="relative">
                <a
                  onClick={() => handleCategoryClick("Corporate Housekeeping")}
                  className={`block py-2 px-3 rounded  md:hover:bg-transparent md:border-0 md:p-0 hover:text-[#F0AE4F] ${
                    activeCategory === "Corporate Housekeeping"
                      ? "text-[#F0AE4F]  "
                      : " dark:text-white"
                  }`}
                >
                  Corporate Housekeeping
                </a>
              </li>

              {/* Management Dropdown */}
              <li className="relative group">
                <button
                  onClick={() => toggleDropdown("management")}
                  className={`flex items-center justify-between w-full py-2 px-3 rounded hover:text-[#F0AE4F] md:hover:bg-transparent md:p-0 md:w-auto${
                    activeCategory === "Management"
                      ? "text-[#F0AE4F]"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  Management
                  <IoMdArrowDropdown />
                </button>

                {activeDropdown === "management" && (
                  <div className="absolute left-0 mt-2 z-10 font-normal bg-white divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-2 w-32 text-sm text-gray-700 dark:text-gray-400">
                      {["Startup", "Business", "Wealth"].map((sub) => (
                        <li key={sub}>
                          <button
                            onClick={() => handleCategoryClick(sub)}
                            className={`block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                              activeCategory === sub
                                ? "font-semibold text-[#F0AE4F]"
                                : ""
                            }`}
                          >
                            {sub}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Category;
