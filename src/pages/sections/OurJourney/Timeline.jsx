import React, { useState } from "react";

const Timeline = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-yellow-500 mb-4">
          OUR MILESTONES
        </h2>
      </div>
      <div className="flex justify-between items-center mt-10">
        <div className="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold text-white mb-2">2019</h3>
            <p className="text-gray-400">Raised $3,000,000 in equity</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold text-white mb-2">2021</h3>
            <p className="text-gray-400">
              Raised $8,500,000 in equity,
              <br /> and $2,000,000 in debt
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold text-white mb-2">2022</h3>
            <p className="text-gray-400">
              Raised $1,500,000 in equity,
              <br /> and $3,000,000 in debt
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold text-white mb-2">2023</h3>
            <p className="text-gray-400">
              Raised $20,000,000 in
              <br /> equity, and was Lead Financial
              <br /> Adviser in $40,000,000
              <br /> syndicate deal with
              <br /> international development
              <br /> banks
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="h-1 w-full bg-gray-700"></div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="h-4 w-4 rounded-full bg-white"></div>
        <div className="h-4 w-4 rounded-full bg-white mx-2"></div>
        <div className="h-4 w-4 rounded-full bg-white"></div>
        <div className="h-4 w-4 rounded-full bg-white mx-2"></div>
      </div>
    </div>
  );
};

export default Timeline;
