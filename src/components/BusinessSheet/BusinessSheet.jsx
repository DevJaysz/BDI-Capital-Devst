import AskAnExpert from "../../assets/images/AskAnExpert.jpg";
import { RiArrowRightWideFill } from "react-icons/ri";

function BusinessSheet() {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl md:mx-10 md:my-20">
        <div className="grid items-center gap-8 sm:gap-20  lg:grid-cols-2">
          {/* Hero Content */}
          <div>
            <h1 className="pb-4 text-2xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold  text-[#F0AE4F]">
              We handle the backend, so you can focus on the frontend.
            </h1>
            <p className="pb-6 max-w-lg text-sm md:text-lg font-light text-gray-300 sm:text-xl md:pb-10 lg:pb-12 text-justify">
              BDI Capital, we take care of all the questions that keep you up at
              night, all the questions you can’t answer, and all the tasks
              you’re still figuring out how to do.
            </p>
            <button className="flex items-center justify-center  border border-white text-white py-3 px-6 text-lg rounded-lg max-w-xs hover:bg-white hover:text-black transition duration-300">
              Get Started
              <RiArrowRightWideFill className="ml-2" />
            </button>
          </div>
          {/* Hero Image */}
          <div className="h-full w-full">
            <img
              src={AskAnExpert}
              alt="Hero"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BusinessSheet;
