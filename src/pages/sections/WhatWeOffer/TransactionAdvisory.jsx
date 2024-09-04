import React, { useState, useEffect, useRef } from "react";
import { InlineWidget } from "react-calendly"; // Import the ContactFormModal component
import Calendly from "../../../components/Calendly/Calendly";

const plans = [
  {
    id: 1,
    title: "01",
    heading: "M&A Buyer & Seller Side​",
    description: `Enjoy flexible arrangements when we help you buy or sell a business. Available payment options are through company valuations or via success fee upon completion of the deal.

BDI Capital has successfully closed $43.5 million in fundraising transactions for its clients..
  `,

    price: "",
    pricePeriod: "/starting",
    buttonText: "Book Schedule",
    calendlyUrl: "https://calendly.com/rachel-bdi",
  },
  {
    id: 2,
    title: "02",
    heading: "BDI Business Community​​",
    description: `Break down the barriers between you and the mentors and investors you’re trying to reach. By joining our community, you get access to successful entrepreneurs, investors, and seasoned business mentors from around the world. Through our once a month meetings, you can make the connections you need while getting expert top quality mentorship and advice that can guide you towards business success.
  `,
    price: 1000,
    pricePeriod: "/starting per year",
    buttonText: "Book Schedule",
    calendlyUrl: "https://calendly.com/rachel-bdi",
  },
  {
    id: 3,
    title: "03",
    heading: "Wealth Management​",
    description: `Whether you’ve just exited your venture, or need safe and advantageous places to grow your wealth, BDI’s expert team will deliver thoughtful investment advisory services. Our own investments have reached 100x returns.`,
    price: 1000,
    pricePeriod: "/per month",
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
function TransactionAdvisory() {
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
    <div id="Transaction" className="max-w-7xl px-0 lg:px-5" ref={sectionRef}>
      <div className="mx-auto mb-4 max-w-5xl text-center md:mb-12 lg:mb-8">
        <h2 className="text-2xl font-bold md:text-5xl items-start text-[#F0AE4F]">
          TRANSACTION ADVISORY
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

export default TransactionAdvisory;
