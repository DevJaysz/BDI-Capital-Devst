import React from 'react'

function FundingYourVenture() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="flex flex-col-reverse items-start gap-8 sm:gap-20 lg:flex-row-reverse lg:items-center">
          <div className="lg:w-1/2">
            <h2 className="mb-4  max-w-xl text-3xl md:text-5xl  font-semibold text-[#F0AE4F] ">
            FUELING YOUR STARTUP
            </h2>
            <p className="mb-6 max-w-xl text-sm font-light text-gray-300 sm:text-base md:mb-10 lg:mb-12 text-justify">
            Our seed investment ranges from $20,000 to $500,000, designed to provide the essential financial support needed for early-stage growth and development.
            </p>
            <p className="mb-6 max-w-lg text-sm font-light text-gray-300 sm:text-base md:mb-10 lg:mb-12 text-justify">
            Would you like to grow with us?
            </p>
            <a
              href="#"
              className="inline-block bg-black px-6 py-3 font-semibold text-white"
            >
              Get started
            </a>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FundingYourVenture