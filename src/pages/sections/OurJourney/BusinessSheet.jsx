import AskAnExpert from "../../../assets/images/AskAnExpert.jpg";
import { RiArrowRightWideFill } from "react-icons/ri";

function BusinessSheet() {
  return (
    <div className="mx-auto w-full max-w-7xl ">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-6 items-center">
        {/* Hero Content */}
        <div className="lg:pr-6">
          <h1 className="pb-4 text-3xl md:text-3xl lg:text-5xl xl:text-7xl font-bold text-[#F0AE4F]">
            We handle the backend, so you can focus on the frontend.
          </h1>
          <p className="pb-6 lg:pb-10  max-w-lg text-sm md:text-base font-light text-gray-300  text-justify">
            At BDI Capital, we take care of all the questions that keep you up
            at night, all the questions you can’t answer, and all the tasks
            you’re still figuring out how to do.
          </p>
          <button className="flex items-center justify-center  py-3 px-6 text-sm font-semibold rounded-lg max-w-xs border text-gray-300 hover:bg-white hover:text-black transition duration-300">
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
  );
}

export default BusinessSheet;
