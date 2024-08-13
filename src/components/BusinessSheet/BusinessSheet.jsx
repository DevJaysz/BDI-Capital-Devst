import AskAnExpert from "../../assets/images/AskAnExpert.jpg";

function BusinessSheet() {
  return (
    <>
      <header>
        {/* Hero Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Component */}
          <div className="grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
            {/* Hero Content */}
            <div className="flex flex-col">
              {/* Hero Title */}
              <h1 className="mb-4 text-4xl font-bold md:text-6xl text-[#F0AE4F]">
                We handle the backend, so you can focus on the frontend.
              </h1>
              <p className="mb-6 max-w-lg text-sm font-light text-gray-300 sm:text-xl md:mb-10 lg:mb-12">
                BDI Capital, we take care of all the questions that keep you up
                at night, all the questions you can’t answer, and all the tasks
                you’re still figuring out how to do.
              </p>
              {/* Hero Button */}
              <div className="flex items-center">
                <a
                  href="#"
                  className="mr-5 items-center border border-white rounded-lg px-6 py-3 font-semibold text-white md:mr-6 lg:mr-8 hover:bg-white hover:text-black transition duration-300"
                >
                  Get Stared
                </a>
              </div>
            </div>
            {/* Hero Image */}
            <img
              src={AskAnExpert}
              alt=""
              className="inline-block h-full w-full max-w-2xl rounded-lg"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default BusinessSheet;
