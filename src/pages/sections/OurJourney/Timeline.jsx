import React from 'react';

const Timeline = () => {
  const qualifications = [
    {
      date: "2016",
      description: "Invested $100,000 in Buskowitz Energy (Current value of investment $600,000)."
    },
    {
      date: "2017",
      description: "Raised $2,500,000 in equity, and $1,000,000 in debt."
    },
    {
      date: "2018",
      description: "Raised $2,000,000 in equity."
    },
    {
      date: "2019",
      description: "Raised $3,000,000 in equity."
    },
    {
      date: "2021",
      description: "Raised $8,500,000 in equity, and $2,000,000 in debt."
    },
    {
      date: "2022",
      description: "Raised $1,500,000 in equity, and $3,000,000 in debt."
    },
    {
      date: "2023",
      description: "Raised $20,000,000 in equity, and was Lead Financial Adviser in $40,000,000 syndicate deal with international development banks."
    },
    {
      date: "2024",
      description: "Raised $28,000,000 in equity."
    },
  ];

  return (
    <div id="/Investments">
      <h2 className="text-3xl md:text-3xl lg:text-5xl xl:text-7xl font-bold text-center text-[#F0AE4F] mb-6 md:mb-12 xl:mb-4" data-aos="fade-zoom-in"
        data-aos-duration="1000">
       OUR INVESTMENTS
      </h2>
      <div className="mx-auto max-w-xl">
        {qualifications.map((item, idx) => (
          <div key={idx} className="qualification-data grid grid-cols-[1fr_max-content_1fr] gap-x-6 ">
            {idx % 2 === 0 ? (
              <>
                <div className="text-end" data-aos="zoom-in-up">
                  <h3 className=" font-medium text-base lg:text-lg xl:text-2xl text-[#F0AE4F] ">{item.date}</h3>
                  <p className="text-xs md:text-base text-gray-300">
                    {item.description}
                  </p>
                </div>
                <div>
                  <span className=" w-[13px] h-[13px] bg-gray-400 rounded-full inline-block" data-aos="fade-down"></span>
                  {idx < qualifications.length - 1 && (
                    <span className=" w-[1.5px] h-full max-h-lvh bg-gray-400 block transform translate-x-[6px] translate-y-[-7px] "></span>
                  )}
                </div>
              </>
            ) : (
              <>
                <div></div>
                <div>
                  <span className=" w-[13px] h-[13px] bg-gray-400 rounded-full inline-block" data-aos="fade-down"></span>
                  {idx < qualifications.length - 1 && (
                    <span className=" w-[1.5px] h-full bg-gray-400 block transform translate-x-[6px] translate-y-[-7px]"></span>
                  )}
                </div>
                <div data-aos="zoom-in-up">
                <h3 className=" font-medium text-base lg:text-lg xl:text-2xl  text-[#F0AE4F] ">{item.date}</h3>
                 <p className="text-xs md:text-base  text-gray-300">
                    {item.description}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
