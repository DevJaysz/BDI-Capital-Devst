function TrackRecord() {
  return (
    <>
    <div className="w-full max-w-7xl mx-auto md:px-10 md:py-20">
  <h2 className="text-center text-3xl md:text-7xl lg:text-6xl  font-bold text-[#F0AE4F] mb-6 md:mb-8">
    OUR TRACK RECORD
  </h2>
  <p className="mx-auto  text-center text-sm md:text-xl text-gray-400  md:mb-6">
    BDI CAPITAL HAS SUCCESSFULLY CLOSED{" "}
    <span className="font-bold text-gray-300 ">$107.5 MILLION </span> IN FUNDRAISING
    TRANSACTIONS FOR ITS CLIENTS.
  </p>

  <div className="flex flex-row gap-6 lg:gap-36 items-center justify-between py-8 w-full max-w-5xl mx-auto">
    {[
      { label: "EQUITY CAPITAL RAISED", amount: "$ 65.6 M" },
      { label: "DEBT CAPITAL RAISED", amount: "$ 42 M" },
    ].map(({ label, amount }) => (
      <div
        key={label}
        className="flex flex-col items-center gap-4 text-gray-300 text-center"
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
