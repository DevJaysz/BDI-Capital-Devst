import React from 'react'

function Headlines() {
  return (
    <section
    className="overflow-hidden bg-[url('https://images.unsplash.com/photo-1489982707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-top bg-no-repeat"
  >
   <div className='bg-black/50 '>
   <div className="container mx-auto w-full   px-4 py-8 md: text-center">
      <div className="text-center sm:text-left">
        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Boost Your Business with <br/> Smarter Accounting</h2>

        <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
          Leverage advanced software and best practices to streamline your accounting processes. Unlock your potential by making informed decisions that drive productivity and success.
        </p>

        <div className="mt-4 sm:mt-8">
          <a
            href="#"
            className="inline-block  px-12 py-3 text-sm font-medium rounded-lg max-w-xs border text-gray-300 hover:bg-white hover:text-black transition duration-300 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Yours Today
          </a>
        </div>
      </div>
    </div>
   </div>
    
  </section>
  )
}

export default Headlines