import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination"; // Pagination styles
import Image1 from "../../../assets/images/eBookSlider1.png";
import Image2 from "../../../assets/images/eBookSlider2.png";
import Image3 from "../../../assets/images/eBookSlider3.png";

function Headlines() {
  const slidesData = [
    {
      image: Image1,
      heading: "Enhance Your Financial Performance",
      description:
        "Explore powerful tools that help you monitor cash flow, manage expenses, and maximize profit. Stay ahead of the competition with smarter financial strategies.",
    },
    {
      image: Image2,
      heading: "Optimized Your Taxes",
      description:
        "Maximize savings, improve your cash flow, and keep your business both profitable and competitive. Get your guide now!",
    },
    {
      image: Image3,
      heading: "Learn the Basics of Corporate Finance",
      description:
        "Manage your capital, mitigate risks, grow and expand while making the right strategic decisions. The Basics of Corporate Finance is a must-read for all start-ups and entrepreneurs!",
    },
  ];

  return (
    <section className="overflow-hidden bg-top bg-no-repeat">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 7000 }}
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
