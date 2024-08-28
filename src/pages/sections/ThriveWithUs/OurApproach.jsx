import Thrive1 from "../../../assets/images/Thrive1.jpg";

function OurApproach() {
  return (
    <>
      {/* Component */}
      <div
        id="/SeedInvestment"
        className="flex flex-col-reverse items-center justify-center  gap-4 md:gap-10 lg:flex-row-reverse lg:gap-8 "
      >
        <div
          className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-start lg:justify-start lg:w-1/2 lg:text-left text-center"
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
        >
          <div className="flex flex-col items-center gap-4 lg:items-start w-full max-w-3xl">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#F0AE4F]">
              SEED INVESTMENT
            </h2>
            <p className=" max-w-lg text-sm sm:text-base lg:text-lg font-light text-gray-300 text-justify">
              We believe in a sustainable future, where the needs of future
              generations will not be compromised by our actions.
            </p>
            <p className=" max-w-lg text-sm sm:text-base lg:text-lg font-light text-gray-300 text-justify">
              Our goal is to invest in ventures that positively contribute to
              the world through eco-friendly products and practices.
            </p>
          </div>
        </div>

        <div
          className="w-auto lg:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src={Thrive1}
            className="w-full h-auto rounded-lg object-cover"
            alt="Approach Image"
          />
        </div>
      </div>
    </>
  );
}

export default OurApproach;
