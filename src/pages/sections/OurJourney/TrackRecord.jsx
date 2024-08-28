import { useState, useEffect, useRef } from "react";

// TrackRecord component with Counter logic
function TrackRecord() {
  const [startAnimation, setStartAnimation] = useState(false);
  const trackRecordRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.unobserve(entry.target); // Stop observing once animation starts
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (trackRecordRef.current) {
      observer.observe(trackRecordRef.current);
    }

    return () => {
      if (trackRecordRef.current) {
        observer.unobserve(trackRecordRef.current);
      }
    };
  }, []);

  // Helper function to format the number
  const formatValue = (value) =>
    value % 1 === 0
      ? value.toLocaleString()
      : value.toFixed(1).toLocaleString();

  // Counter component to animate numbers
  const Counter = ({ endValue, duration, startAnimation }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
      if (!startAnimation) return;

      const frameDuration = 1000 / 60; // 60 frames per second
      const totalFrames = Math.round(duration / frameDuration);
      const step = endValue / totalFrames;
      let frameCount = 0;

      const timer = setInterval(() => {
        setValue((prev) => {
          frameCount++;
          const newValue = Math.min(prev + step, endValue);
          if (frameCount >= totalFrames) {
            clearInterval(timer);
            return endValue;
          }
          return newValue;
        });
      }, frameDuration);

      return () => clearInterval(timer);
    }, [endValue, duration, startAnimation]);

    return <span>{formatValue(value)}</span>;
  };

  const records = [
    {
      label: "EQUITY CAPITAL RAISED",
      currency: "$",
      amount: "65.6",
      value: "M",
    },
    { label: "DEBT CAPITAL RAISED", currency: "$", amount: "42", value: "M" },
  ];

  return (
    <div
      ref={trackRecordRef}
      className="w-full max-w-7xl mx-auto md:px-10 md:py-20"
    >
      <h2
        className="text-center text-3xl md:text-3xl lg:text-5xl xl:text-7xl font-bold text-[#F0AE4F] mb-6 md:mb-8"
        data-aos="fade-zoom-in"
        data-aos-duration="1000"
      >
        OUR TRACK RECORD
      </h2>
      <p
        className="mx-auto text-center text-sm md:text-xl text-gray-400 md:mb-6"
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
      >
        BDI CAPITAL HAS SUCCESSFULLY CLOSED{" "}
        <span className="font-bold text-gray-300">$107.5 MILLION </span> IN
        FUNDRAISING TRANSACTIONS FOR ITS CLIENTS.
      </p>
      <div className="flex flex-row gap-6 lg:gap-36 items-center justify-between py-8 w-full max-w-5xl mx-auto">
        {records.map((record) => (
          <div
            key={record.label}
            className="flex flex-col items-center gap-4 text-gray-300 text-center"
          >
            <p
              className="text-sm"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              {record.label}
            </p>
            <h2 className="text-3xl font-bold md:text-6xl flex items-center">
              <span className="mr-1">{record.currency}</span>
              <Counter
                endValue={parseFloat(record.amount)}
                duration={900}
                startAnimation={startAnimation}
              />
              <span className="ml-1">{record.value}</span>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrackRecord;
