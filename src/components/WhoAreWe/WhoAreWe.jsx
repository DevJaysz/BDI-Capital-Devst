import PictureLeft from "../../assets/images/office-long-1-left.png";
import PictureRight from "../../assets/images/office-long-1-right.png/";
import { RiArrowRightWideFill } from "react-icons/ri";

function WhoAreWe() {
  return (
    <>
      <div className="gap-14  items-center mx-auto max-w-screen-xl  md:grid md:grid-cols-2">
        <div className="grid grid-cols-2 gap-4 pt-8 md:pt-0">
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
          <h2 className="mb-4 mt-4 md:mt-0 text-2xl md:text-3xl lg:text-5xl  font-bold text-gray-300 uppercase">
            Get to Know Us
          </h2>
          <p className="mb-4 text-sm md:text-base max-w-100 text-gray-500 text-justify ">
            We believe in lowering the fail rate of startups and growing
            businesses by providing them with the right tools, resources, and
            guidance. Our mission is to foster innovation and sustainable growth
            through strategic support and mentorship.
          </p>

          <div className="flex flex-col gap-4 mt-8 ">
            {["OUR TRACK RECORD", "OUR INVESTMENTS", "OUR CLIENTS SAY"].map(
              (text, index) => (
                <button
                  key={text}
                  className="border text-sm md:text-base border-white text-white py-3 px-6 rounded-lg max-w-xs hover:bg-white hover:text-black transition duration-300 flex items-center justify-center"
                >
                  {text}
                  <RiArrowRightWideFill
                    className={`ml-${
                      index === 0 ? "2" : index === 1 ? "8" : "9"
                    }`}
                  />
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
