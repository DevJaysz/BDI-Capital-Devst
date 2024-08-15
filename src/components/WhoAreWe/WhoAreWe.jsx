import PictureLeft from "../../assets/images/office-long-1-left.png";
import PictureRight from "../../assets/images/office-long-1-right.png/";
import { RiArrowRightWideFill } from "react-icons/ri";

function WhoAreWe() {
  return (
    <>
      <div className="gap-4 items-center mx-auto max-w-screen-xl  md:grid md:grid-cols lg:gap-8 lg:grid lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-2  md:pt-0">
          <img
            className="w-full md:w-96 rounded-lg"
            src={PictureLeft}
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={PictureRight}
            alt="office content 2"
          />
        </div>

        <div className="flex flex-col justify-center font-light sm:text-lg">
          <h2 className="mb-4 mt-4 md:mt-0 text-3xl md:text-7xl lg:text-6xl font-bold text-[#F0AE4F] uppercase">
            Who are we?
          </h2>
          
          
          <p className=" text-sm md:text-base max-w-full text-gray-300 text-justify ">
          We believe in lowering the fail rate of startups and growing businesses by offering innovative solutions and tailored support. Our mission is to empower entrepreneurs with the resources, mentorship, and strategic guidance they need to navigate challenges, seize opportunities, and achieve sustainable growth. By fostering a collaborative environment and leveraging industry expertise, we aim to drive long-term success and resilience in the ever-evolving business landscape
          </p>

          <div className="flex flex-col gap-4 mt-5 ">
              {["OUR TRACK RECORD", "OUR INVESTMENTS", "OUR CLIENTS SAY"].map(
                (text) => (
                  <button
                    key={text}
                    className="border text-sm md:text-base border-white text-white py-3 px-6 rounded-lg max-w-xs hover:bg-white hover:text-black transition duration-300 flex items-center justify-between"
                  >
                    {text}
                    <RiArrowRightWideFill className="ml-2" />
                  </button>
                )
              )}
          </div>

        </div>
      </div>
    </>
  );
}

export default WhoAreWe;
