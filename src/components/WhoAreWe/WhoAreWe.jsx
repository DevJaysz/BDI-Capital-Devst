import PictureLeft from "../../assets/images/office-long-1-left.png";
import PictureRight from "../../assets/images/office-long-1-right.png/";

function WhoAreWe() {
  return (
    <>
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="grid grid-cols-2 gap-4 mt-8 lg:mt-0">
          {/* Adjusted top margin */}
          <img
            className="w-full md:w-80 rounded-lg"
            src={PictureLeft}
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={PictureRight}
            alt="office content 2"
          />
        </div>
        <div className="font-light text-gray-500  sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl md:text-6xl tracking-tight font-bold text-[#F0AE4F]">
            Get to Know Us
          </h2>
          <p className="mb-4">
            We believe in lowering the fail rate of startups and growing
            businesses by providing them with the right tools, resources, and
            guidance. Our mission is to foster innovation and sustainable growth
            through strategic support and mentorship.
          </p>

          {/* Buttons Section */}
          <div className="flex flex-col gap-4 mt-8">
            <button className="border border-white text-white py-3 px-6 text-lg rounded-lg max-w-xs hover:bg-white hover:text-black transition duration-300 flex items-center justify-center">
              OUR TRACK RECORD
              <span className="ml-2">&#x2192;</span>
            </button>
            <button className="border border-white text-white py-3 px-6 text-lg rounded-lg max-w-xs hover:bg-white hover:text-black transition duration-300 flex items-center justify-center">
              OUR INVESTMENTS
              <span className="ml-8">&#x2192;</span>
            </button>
            <button className="border border-white text-white py-3 px-6 text-lg rounded-lg max-w-xs hover:bg-white hover:text-black transition duration-300 flex items-center justify-center">
              OUR CLIENTS SAY
              <span className="ml-9">&#x2192;</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoAreWe;
