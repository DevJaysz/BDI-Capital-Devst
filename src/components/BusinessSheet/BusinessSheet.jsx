import AskAnExpert from "../../assets/images/AskAnExpert.jpg";
import { RiArrowRightWideFill } from "react-icons/ri";

function BusinessSheet() {
  return (
    
    
      <div className=" mx-auto w-full max-w-7xl md:mx-10 md:my-20">
        <div className=" flex flex-col-reverse lg:grid gap-6 lg:grid-cols-2 items-center ">
          {/* Hero Content */}
          <div>
            <h1 className="pb-4 text-5xl md:text-6xl  xl:text-7xl font-bold  text-[#F0AE4F]">
              We handle the backend, so you can focus on the frontend.
            </h1>
            <p className="pb-6 max-w-lg text-sm md:text-lg font-light text-gray-300 sm:text-xl md:pb-10 lg:pb-12 text-justify">
              BDI Capital, we take care of all the questions that keep you up at
              night, all the questions you can’t answer, and all the tasks
              you’re still figuring out how to do.
            </p>
            <button className="flex items-center justify-center py-3 px-6 text-sm rounded-lg max-w-xs border  text-gray-300 hover:bg-white hover:text-black transition duration-300">
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
