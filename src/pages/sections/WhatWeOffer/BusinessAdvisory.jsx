import React, { useState, useEffect, useRef } from "react";
import { InlineWidget } from "react-calendly"; // Import the ContactFormModal component
import Calendly from "../../../components/Calendly/Calendly";

const plans = [
  {
    id: 1,
    title: "01",
    heading: "Human Resource Administration​​",
    description: `Do you have the right HR policies? Is all your documentation up to date? We’ll help create the right policies, processes, and procedures; write a code of conduct aligned with your culture; comply with workplace regulations, and more!`,
    price: 400,
    pricePeriod: "/one time fee",
    buttonText: "Book Schedule",
    calendlyUrl: "https://calendly.com/rachel-bdi", // Replace with actual Calendly link
  },
  {
    id: 2,
    title: "02",
    heading: "Payroll & Statutory Benefits​",
    description: `Monthly payroll and benefits filing can be dizzying, especially when making sure it tallies with your accounting system. Fear not. BDI’s expert team can help you pay your employees on time, file their benefits, and align it with your books!`,
    price: 200,
    pricePeriod: "/for every 10 employees",
    buttonText: "Book Schedule",
    calendlyUrl: "https://calendly.com/rachel-bdi", // Replace with actual Calendly link
  },
  {
    id: 3,
    title: "03",
    heading: "Performance Management​",
    description: `Keeping track of employee performance can be tedious. Whether it be clarifying job responsibilities, highlighting priorities and performance expectations, and roadmapping an individual’s career journey in the company, BDI’s continuous process of communication helps align your employees with your company’s goals.(Executive Performance Coaching also available.)`,
    price: 1000,
    pricePeriod: "/starting per month",
    buttonText: "Book Schedule",
    calendlyUrl: "https://calendly.com/rachel-bdi", // Replace with actual Calendly link
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

function BusinessAdvisory() {
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
    <div id="02" className="max-w-7xl px-0 lg:px-5" ref={sectionRef}>
      <div className="mx-auto mb-4 max-w-5xl text-center md:mb-12 lg:mb-8">
        <h2 className="text-2xl font-bold md:text-5xl items-start text-[#F0AE4F]">
          BUSINESS ADVISORY
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-1 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="mx-auto flex w-full max-w-md flex-col items-start gap-4 p-2 md:p-8 rounded-md border border-neutral-800 bg-neutral-900/50 shadow-lg"
          >
            <div className="rounded-md  py-1.5">
              <p className="text-sm font-bold text-gray-500 md:text-sm">
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
                className="w-full rounded-md border text-gray-300 px-6 py-3 text-center font-semibold hover:bg-white hover:text-black cursor-pointer transition duration-300 "
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
export default BusinessAdvisory;
