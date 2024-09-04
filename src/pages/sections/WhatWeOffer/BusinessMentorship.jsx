import React, { useState, useEffect, useRef } from "react";
import { InlineWidget } from "react-calendly";
import Calendly from "../../../components/Calendly/Calendly";

// Plans data
const plans = [
  {
    id: 1,
    title: "01",
    heading: "One-on-One Mentorship",
    description: `Take charge of your business’ growth and your personal development as an entrepreneur. Our one-on-one mentorship program helps both you and your business progress. Each session is designed to sharpen your entrepreneurial skills while assisting in the conceptualization and execution of business strategy.`,
    price: 600,
    pricePeriod: "/month",
    buttonText: "Book Schedule",
    calendlyUrl: "https://calendly.com/rachel-bdi",
  },
  {
    id: 2,
    title: "02",
    heading: "Quick Fix Session",
    description: `Find the solutions to the questions and problems you can’t answer. A one to two-hour session, we tackle your immediate business problems, providing strategy and remedy. Our expertise includes corporate structure, general company operations, financial modeling and planning, marketing and communications strategy, and growth strategy in the following industries: energy utilities, communication service, hospitality, finance, and real estate.`,
    price: 150,
    pricePeriod: "/session",
    buttonText: "Book Schedule",
    calendlyUrl: "https://calendly.com/rachel-bdi",
  },
  {
    id: 3,
    title: "03",
    heading: "Company Incorporation",
    description: `Make the right choice for your company in terms of where to set up shop. Allow us to guide you with documentation, strategy, as well as founder protection.`,
    price: 900,
    pricePeriod: "/one time fee",
    buttonText: "Book Schedule",
    calendlyUrl: "https://calendly.com/rachel-bdi",
  },
];

// Price animation component
const PriceAnimation = ({ price, isVisible }) => {
  const [animatedPrice, setAnimatedPrice] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1000; // duration of the animation in milliseconds
    const increment = price / (duration / 10);

    const animate = () => {
      start += increment;
      if (start < price) {
        setAnimatedPrice(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setAnimatedPrice(price);
      }
    };

    animate();
  }, [price, isVisible]);

  return <>{`$${animatedPrice.toLocaleString()}`}</>;
};


const BusinessMentorship = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCalendlyUrl, setSelectedCalendlyUrl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isModalOpen);
  }, [isModalOpen]);

  const handleOpenCalendly = (url) => {
    setSelectedCalendlyUrl(url);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCalendlyUrl(null);
  };

  return (
    <div id="Mentorship" className="max-w-7xl px-0 lg:px-5" ref={sectionRef}>
      <div className="mx-auto mb-4 max-w-5xl text-center md:mb-12 lg:mb-8">
        <h2 className="text-2xl font-bold md:text-5xl text-[#F0AE4F]">
          BUSINESS MENTORSHIP
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3">
        {plans.map(
          ({
            id,
            title,
            heading,
            description,
            price,
            pricePeriod,
            buttonText,
            calendlyUrl,
          }) => (
            <div
              key={id}
              className="flex flex-col items-start gap-4 p-4 md:p-8 rounded-md border border-neutral-800 bg-neutral-900/50 shadow-lg"
            >
              <div className="rounded-md  py-1.5">
              <p className="text-sm font-bold text-gray-500 md:text-sm">
                {title}
              </p>
            </div>
              <h2 className="text-xl md:text-3xl lg:text-2xl font-bold text-gray-300">
                {heading}
              </h2>
              <p className="flex-grow text-sm md:text-sm lg:text-sm xl:text-base font-light text-gray-400">
                {description}
              </p>
              <div className="flex flex-col gap-4 w-full">
                <h2 className="text-xl font-bold md:text-4xl lg:text-4xl xl:text-5xl text-gray-300">
                  <PriceAnimation price={price} isVisible={isVisible} />
                  <span className="text-sm font-light text-gray-300">
                    {pricePeriod}
                  </span>
                </h2>
                <button
                  onClick={() => handleOpenCalendly(calendlyUrl)}
                  className="w-full rounded-md border text-gray-300 px-6 py-3 text-center font-semibold hover:bg-white hover:text-black cursor-pointer transition duration-300"
                >
                  {buttonText}
                </button>
              </div>
            </div>
          )
        )}
      </div>

      {/* Calendly Modal */}
      <Calendly show={isModalOpen} onClose={handleCloseModal}>
        {selectedCalendlyUrl && (
          <InlineWidget
            url={selectedCalendlyUrl}
            styles={{ height: "700px", width: "100%" }}
          />
        )}
      </Calendly>
    </div>
  );
};

export default BusinessMentorship;
