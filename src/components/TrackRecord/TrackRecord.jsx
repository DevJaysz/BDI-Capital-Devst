function TrackRecord() {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl m-8 md:px-10 md:py-20 ">
        <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold text-gray-300 mb-6 md:mb-8">
          OUR TRACK RECORD
        </h2>
        <p className="m-8 md:mx-auto max-w-lg text-center text-sm text-gray-400 sm:text-base md:mb-6">
          BDI CAPITAL HAS SUCCESSFULLY CLOSED{" "}
          <span className="font-bold">$107.5 MILLION </span> IN FUNDRAISING
          TRANSACTIONS FOR ITS CLIENTS.
        </p>

        <div className="mx-auto flex w-full max-w-4xl flex-col gap-5 px-16 py-8 sm:flex-row  sm:justify-between md:gap-6">
          {[
            { label: "EQUITY CAPITAL RAISED", amount: "$ 65.6 M" },
            { label: "DEBT CAPITAL RAISED", amount: "$ 42 M" },
          ].map(({ label, amount }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-4 text-gray-300 "
            >
              <p className="text-sm">{label}</p>
              <h2 className="text-3xl font-bold md:text-6xl">{amount}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TrackRecord;
