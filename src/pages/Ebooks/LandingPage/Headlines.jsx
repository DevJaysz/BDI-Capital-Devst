import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination"; // Pagination styles
import Image1 from "../../../assets/images/HeadlinesSlider1.jpg";
import Image2 from "../../../assets/images/HeadlinesSlider2.jpg";
import Image3 from "../../../assets/images/HeadlinesSlider3.jpg";
import Image4 from "../../../assets/images/HeadlinesSlider4.jpg";

function Headlines() {
  const slidesData = [
    {
      image: Image1,
      heading: "Boost Your Business with Smarter Accounting",
      description:
        "Leverage advanced software and best practices to streamline your accounting processes. Unlock your potential by making informed decisions that drive productivity and success.",
    },
    {
      image: Image2,
      heading: "Enhance Your Financial Performance",
      description:
        "Explore powerful tools that help you monitor cash flow, manage expenses, and maximize profit. Stay ahead of the competition with smarter financial strategies.",
    },
    {
      image: Image3,
      heading: "Achieve More with Real-time Insights",
      description:
        "Access detailed reports and real-time analytics that empower you to make informed decisions on the go. Stay updated with accurate, actionable data.",
    },
    {
      image: Image4,
      heading: "Streamline Your Accounting Workflow",
      description:
        "Experience seamless integration with your business operations, ensuring that accounting tasks are efficient and effortless.",
    },
  ];

  return (
    <section className="overflow-hidden bg-top bg-no-repeat">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full md:h-[420px] lg:h-[380px] bg-cover bg-center" // Set a height and use bg-cover for images
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black/50 h-full flex items-center">
                <div className="container mx-auto w-full px-4 py-8 flex flex-col items-start justify-center gap-6">
                  <h2 className="text-2xl max-w-xl font-bold text-white sm:text-3xl md:text-5xl">
                    {slide.heading}
                  </h2>
                  <p className="hidden max-w-lg text-white/90 md:block md:text-lg md:leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex justify-center">
                    <a
                      href="#"
                      className="inline-block px-12 py-3 text-sm font-medium rounded-lg max-w-xs border text-gray-300 hover:bg-white hover:text-black transition duration-300 focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                      Get Yours Today
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Headlines;
