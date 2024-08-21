import Thrive2 from "../../../assets/images/Thrive2.jpg";

function HowDoWeInvest() {
  return (
    <>
      {/* Component */}
      <div className="flex flex-col-reverse items-center gap-4 md:gap-10 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-4 lg:w-1/2 lg:text-left">
          <h2 className="max-w-3xl text-2xl md:text-3xl lg:text-5xl font-semibold text-[#F0AE4F] text-center lg:text-left ">
            HOW WE INVEST
          </h2>
          <p className="max-w-lg text-sm sm:text-base lg:text-lg font-light text-gray-300  text-justify lg:items-start">
            We’ve always partnered early. With decades of start-ups and
            entrepreneurial experience, our people understand first-hand what it
            means to be a fearless game-changer.
          </p>
          <p className="max-w-lg text-sm font-light text-gray-300 sm:text-base text-justify lg:items-start ">
            We are hands-on with our partnership. We help establish a blueprint
            that combines our experience with your ideas and culture through a
            long-term mentoring program tailored to your company’s needs.
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={Thrive2}
            className="rounded-lg w-full h-auto max-w-md lg:max-w-full"
            alt="Investment Approach"
          />
        </div>
      </div>
    </>
  );
}

export default HowDoWeInvest;
