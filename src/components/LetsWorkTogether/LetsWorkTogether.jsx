import React from "react";
import { TiMessages } from "react-icons/ti";
import { SlLocationPin } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";

function LetsWorkTogether() {
  return (
    <>
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 sm:text-3xl md:text-6xl  dark:text-white">
            Let's Work Together
          </h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Chat to our friendly team.
          </p>
        </div>

        <div className="mt-10">
          <img
            className="object-cover w-full h-64 rounded-lg sm:h-80 lg:h-96"
            src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=100"
            alt="Contact Us"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 rounded-lg  border shadow-md">
            <div className="flex items-start">
              <span className="  p-4 text-gray-300 rounded-lg  ">
                <TiMessages className="w-12 h-12" />
              </span>
              <div className="ml-4">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                  Chat to sales
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Speak to our friendly team.
                </p>
                <p className="mt-2 text-sm text-gray-300 ">
                  info@bdi-capital.com
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg  border  shadow-md">
            <div className="flex items-start">
              <span className="  p-4 text-gray-300 rounded-lg  ">
                <SlLocationPin className="w-12 h-12" />
              </span>
              <div className="ml-4">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                  Visit us
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Visit our office HQ.
                </p>
                <p className="mt-2 text-[8px] text-gray-300  ">
                  c/o Unit 1002, Unicorn Trade Centre, 127-131 Des Voeux Road
                  Central, Hong Kong
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg  border  shadow-md">
            <div className="flex items-start">
              <span className="  p-4 text-gray-300 rounded-lg  ">
                <IoCallOutline className="w-12 h-12" />
              </span>
              <div className="ml-4">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                  Call us
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Mon-Fri from 8am to 5pm.
                </p>
                <p className="mt-2 text-sm text-gray-300 ">
                  (+63) 917-820-4369
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LetsWorkTogether;
