import Thrive3 from "../../../assets/images/Thrive3.jpg";

function FundingYourVenture() {
  return (
    <>
      {/* Component */}
      <div className="flex flex-col-reverse  items-center justify-center  gap-4 md:gap-10 lg:flex-row-reverse lg:gap-8 ">
        <div
          className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-start lg:justify-start lg:w-1/2 lg:text-left text-center"
          data-aos="fade-in-zoom"
          data-aos-duration="1000"
        >
          <div className="flex flex-col items-center gap-4 lg:items-start w-full max-w-3xl">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#F0AE4F]">
              IGNITING START UPS
            </h2>
            <p className="text-sm sm:text-base lg:text-lg font-light text-gray-300 text-justify">
              OUR SEED INVESTMENT RANGES FROM $20,000 TO $500,000.
            </p>
            <p className="text-sm sm:text-base lg:text-lg font-light text-gray-300 sm:text-start">
              WOULD YOU LIKE TO GROW WITH US?
            </p>
          </div>
        </div>

        <div
          className="w-auto lg:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src={Thrive3}
            className="w-full h-auto rounded-lg object-cover"
            alt="Approach Image"
          />
        </div>
      </div>
    </>
  );
}

export default FundingYourVenture;
