function Testimonial() {
  return (
    <section>
      <div className="relative max-w-6xl px-6 py-10 mx-auto flex flex-col items-center">
        <h1 className="text-3xl md:text-7xl lg:text-6xl  font-bold text-[#F0AE4F] uppercase mb-8 text-center">
          What our clients say
        </h1>

        <main className="relative z-20 w-full mt-8 md:mt-12 flex flex-col items-center md:items-center">
          {/* Centered background box */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="border rounded-2xl md:h-96 max-w-4xl w-full"></div>
          </div>

          <div className="w-full max-w-4xl p-6 flex flex-col items-center md:flex-row md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
            <img
              className="h-24 w-24 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
              src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="client"
            />

            <div className="mt-4 md:mt-0 md:mx-6 text-center md:text-left">
              <p className="text-sm md:text-base font-medium tracking-tight text-white">
                Shingo Yamaguchi
              </p>
              <p className="text-[#F0AE4F] text-sm md:text-base">
                Founder & CEO, 5Dots Grocer
              </p>

              <p className="mt-4 text-xs  text-white text-justify">
                I have tried a lot of mentorship for my company and personally,
                and mentorship with BDI Capital has been one of the best for me.
                James and I went out for dinner, and he connected me with his
                personal contacts.
                <br /> <br />
                As a company, BDI is helping us prepare for our next fundraising
                and financial strategy. The advice we receive is concrete and
                actionable, and I would definitely recommend other startups to
                work with them!
                <br />
                NPS Score 10!
              </p>

              <div className="flex items-center justify-center gap-4 mt-6 md:justify-start">
                <button
                  title="left arrow"
                  className="p-2 text-white transition-colors duration-300 border rounded-full hover:bg-[#F0AE4F] "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  title="right arrow"
                  className="p-2 text-white transition-colors duration-300 border rounded-full hover:bg-[#F0AE4F]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Testimonial;
