import React, { useState, useEffect, useRef } from "react";

const plans = [
  {
    id: 1,
    title: "BASIC",
    heading: "Communications Consultation",
    description: `Build your company’s reputation as a team of experts work with you to identify your brand, lay out a plan for a unique communications campaign across traditional and online platforms, and assist you with any projects that will boost your company’s value and awareness in the market.`,
    price: 825,
    pricePeriod: "/starting per month",
    buttonText: "Book now",
  },
  {
    id: 2,
    title: "GROWTH",
    heading: "Digital Marketing​",
    description: `Work with experienced marketers to grow your audience, identify your target market, and effectively convert leads to sales. Create an impact with your brand to foster an engaged and loyal clientele.`,
    price: 1200,
    pricePeriod: "/month",
    buttonText: "Book now",
  },
  {
    id: 3,
    title: "PREMIUM",
    heading: "Digital IT & Infrastructure​",
    description: `Drive your business with smart solutions and experience digital transformations by restructuring your company’s network, software, hardware, and overall security.`,
    price: "",
    pricePeriod: "/customised pricing",
    buttonText: "Book now",
    features: [
      "Domain",
      "Web Hosting",
      "Corporate E-Mail Address",
      "Calendars + Teleconference",
      "Cloud Back-Up Storage (500 GB) ",
      "Microsoft Office 365 Access",
    ],
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

function DigitalStrategy() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
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

  return (
    <div className="max-w-7xl px-0 md:px-5" ref={sectionRef}>
      {/* Container */}
      <div className="mx-auto mb-4 max-w-3xl text-center md:mb-12 lg:mb-8">
        <h2 className="text-2xl font-bold md:text-5xl mt-4 md:mt-0 items-start  bg-gradient-to-b from-[#F0AE4F] to-gray-400 bg-clip-text text-transparent">
          DIGITAL STRATEGY
        </h2>
      </div>

      {/* Price Container */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="mx-auto flex w-full max-w-md flex-col items-start gap-4  p-2 md:p-8 rounded-md border border-neutral-800 bg-neutral-900/50 shadow-lg "
          >
            <div className="rounded-md bg-black px-4 py-1.5">
              <p className="text-sm font-bold text-white sm:text-sm">
                {plan.title}
              </p>
            </div>

            <h2 className="text-xl md:text-3xl  font-bold text-gray-300">
              {plan.heading}
            </h2>
            <p className="flex-grow text-sm md:text-base font-light text-gray-400">
              {plan.description}
            </p>

            {plan.features && (
              <ul className="mt-4 text-sm md:ext-base text-gray-400">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 inline-block w-2 h-2 bg-green-600 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-col gap-4 items-start w-full">
              <h2 className="text-xl font-bold md:text-5xl text-gray-300">
                <PriceAnimation price={plan.price} isVisible={isVisible} />
                <span className="text-sm font-light sm:text-sm">
                  {plan.pricePeriod}
                </span>
              </h2>

              <a
                href="#"
                className="w-full mt-4 rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
              >
                {plan.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DigitalStrategy;
