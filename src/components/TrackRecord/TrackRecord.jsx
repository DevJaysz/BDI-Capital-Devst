import React from "react";

function TrackRecord() {
  return (
    <>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold md:text-5xl mb-6 md:mb-8">
          OUR TRACK RECORD
        </h2>
        <p className="mx-auto mt-6 md:mt-6 max-w-lg items-center text-center text-sm text-gray-500 sm:text-base md:mb-6 ">
          BDI CAPITAL HAS SUCCESSFULLY CLOSED $107.5 MILLION IN FUNDRAISING
          TRANSACTIONS FOR ITS CLIENTS.
        </p>
        {/* Content */}
        <div className="mx-auto flex w-full max-w-4xl flex-col flex-wrap justify-between gap-5 px-16 py-8 sm:flex-row md:gap-6">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-sm">EQUITY CAPITAL RAISED</p>
            <h2 className="text-3xl font-bold md:text-6xl">$ 65.6 M</h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-sm">DEBT CAPITAL RAISED</p>
            <h2 className="text-3xl font-bold md:text-6xl">$ 42 M</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrackRecord;
