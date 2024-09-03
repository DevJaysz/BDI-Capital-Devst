import React, { useState, useEffect, useRef } from "react";
import { InlineWidget } from "react-calendly"; // Import the ContactFormModal component
import Calendly from "../../../components/Calendly/Calendly";

const plans = [
  {
    id: 1,
    title: "BASIC",
    heading: "Retained Consultant​",
    description: `Discover smooth optimization of day-to-day operations with a dedicated mentor from BDI Capital. A long-term partnership, our team will be available to assist you anytime you need, with anything you need.

(plus billable hours)
    `,

    price: 500,
    pricePeriod: "/starting per month",
    buttonText: "Book Schedule",
    calendlyUrl: "https://calendly.com/rachel-bdi",
  },
  {
    id: 2,
    title: "GROWTH",
    heading: "Operations Review Optimization​​",
    description: `Experience a thorough, one-time audit of your company’s existing framework. Work hand-in-hand with our people for guidance to restructure and give advice on optimizing company by-laws, accounting & tax, corporate governance & housekeeping, compliance, and sales & marketing, among others.
    `,
    price: 2000,
    pricePeriod: "/starting",
    buttonText: "Book Schedule",
    calendlyUrl: "https://calendly.com/rachel-bdi",
  },
];
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
function OperationsAndManagement() {
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
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden"); // Disable scrolling when modal is open
    } else {
      document.body.classList.remove("overflow-hidden"); // Enable scrolling when modal is closed
    }
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
    <div id="step-01" className="max-w-7xl px-0 lg:px-5" ref={sectionRef}>
      <div className="mx-auto mb-4 max-w-5xl text-center md:mb-12 lg:mb-8">
        <h2 className="text-2xl font-bold md:text-5xl items-start text-[#F0AE4F]">
          OPERATIONS CONSULTING
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-1 lg:grid-cols-2">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="mx-auto flex w-full max-w-md flex-col items-start gap-4 p-2 md:p-8 rounded-md border border-neutral-800 bg-neutral-900/50 shadow-lg"
          >
            <div className="rounded-md bg-black px-4 py-1.5">
              <p className="text-sm font-bold text-white md:text-sm">
                {plan.title}
              </p>
            </div>
            <h2 className="text-xl md:text-3xl lg:text-2xl font-bold text-gray-300">
              {plan.heading}
            </h2>
            <p className="flex-grow text-sm md:text-sm lg:text-sm xl:text-base font-light text-gray-400">
              {plan.description}
            </p>
            <div className="flex flex-col gap-4 items-start w-full">
              <h2 className="text-xl font-bold md:text-4xl lg:text-4xl xl:text-5xl text-gray-300">
                <PriceAnimation price={plan.price} isVisible={isVisible} />
                <span className="text-sm font-light text-gray-300">
                  {plan.pricePeriod}
                </span>
              </h2>
              <button
                onClick={() => handleOpenCalendly(plan.calendlyUrl)}
                className="w-full rounded-md border text-gray-300 px-6 py-3 text-center font-semibold hover:bg-white hover:text-black cursor-pointer transition duration-300"
              >
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
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
}

export default OperationsAndManagement;
