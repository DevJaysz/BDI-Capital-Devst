import Business from "../../../assets/images/WhoAreWe.jpg";
import { RiArrowRightWideFill } from "react-icons/ri";

function WhoAreWe() {
  return (
    <>
      <div className="flex flex-col-reverse items-start gap-4  lg:flex-row-reverse lg:items-center">
        <div className="lg:w-1/2">
          <h2 className="mb-4 max-w-3xl text-3xl md:text-7xl font-semibold text-[#F0AE4F] uppercase">
            Who are we?
          </h2>
          <p className="mb-6 max-w-lg text-sm font-light text-gray-300 sm:text-base md:mb-10 lg:mb-12 text-justify">
            We believe in lowering the fail rate of startups and growing
            businesses by providing them with the right tools, resources, and
            guidance. Our mission is to foster innovation and sustainable growth
            through strategic support and mentorship. By offering a
            comprehensive range of services tailored to the unique needs of each
            business, we help entrepreneurs navigate the complexities of their
            industries. From initial idea validation to scaling operations, our
            team of experienced professionals is dedicated to empowering
            businesses at every stage of their journey
          </p>
          <div className="flex flex-col gap-4 mt-5">
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
        <div className="w-full xl:w-1/2">
          <img src={Business} alt="office content" />
        </div>
      </div>
    </>
  );
}

export default WhoAreWe;
