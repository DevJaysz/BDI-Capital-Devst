import React from "react";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import Shingo from "../../../assets/images/Shingo-1-269x300.png";
import Jordan from "../../../assets/images/Jordan.png";
import Jamie from "../../../assets/images/Jamie.jpg";
import Luca from "../../../assets/images/Luca.png";
import Manoj from "../../../assets/images/Manoj.jpg";
import Jesse from "../../../assets/images/Jesse.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Shingo Yamaguchi",
    title: "Founder & CEO, 5Dots Grocer",
    image: Shingo,
    feedback: `I have tried a lot of mentorship for my company and personally,
      and mentorship with BDI Capital has been one of the best for me.
      James and I went out for dinner, and he connected me with his
      personal contacts.
      <br />
      <br />
      As a company, BDI is helping us prepare for our next fundraising
      and financial strategy. The advice we receive is concrete and
      actionable, and I would definitely recommend other startups to
      work with them!
      <br />
      NPS Score 10!`,
  },
  {
    name: "Jordan Glickman",
    title: "CEO, Impremis Marketing",
    image: Jordan,
    feedback: `James played a crucial role in helping our organization achieve global 
    impact by providing invaluable clarity and guidance in setting and achieving financial goals.
    <br />
    <br />
    Unlike other consultants, he is genuinely invested in your success, offering mentorship that 
    far exceeds its value.
    <br />
    <br /> His integrity and dedication to supporting founders are unmatched in the business world. 
    I highly recommend his mentorship to other founders.`,
  },
  {
    name: "Jaemie Viclar",
    title: "Founder, Sierra’s Co.",
    image: Jamie,
    feedback: `
      As a newcomer to the business world, BDI Capital exceeded my expectations. They provided me
      with valuable insights and a unique perspective on the future of my venture, Sierras Co.
      <br />
      <br />
      What impressed me the most was James and Rachel’s ability to offer a fresh outlook on the
      challenges in business. They guided me to explore different angles and viewpoints, which will
      help me develop a comprehensive strategy.
      <br />
      <br />
      Without a doubt, I would strongly recommend BDI Capital to fellow entrepreneurs and business
      owners who are seeking innovative perspectives and expert guidance.`,
  },
  {
    name: "Luca Galli",
    title: "Founder & CEO, Pizo Italian Square Pizza Inc.",
    image: Luca,
    feedback: `BDI effectively serves the purpose of offering
     solutions to SME's and entrepreneurs facing the classic 
     challenges that come with running a business.`,
  },
  {
    name: "Manoj Dhamwani",
    title: "Wealth Management",
    image: Manoj,
    feedback: `Working with BDI has been a great experience, both professional and personally.
      They took the time  to understand my goals, risk, tolerance and long term plans;
      <br />
      crafting and personalized investment strategy that perfectly suits my needs.
      <br />
      <br />
      They Explain complex financial concepts in a way that is easy to understand, making sure that I am always 
      comfortable with the decisions being made. 
      <br />
      <br />
      BDI has been instrumental in helping me achieve my financial goals and I am grateful for their time.`,
  },
  {
    name: "Jesse Trinh",
    title: "President, Ovation Encore Philippines Inc.",
    title2: "Head of International Business, O3 Collective Pty Ltd",
    image: Jesse,
    feedback: `I think all businesses and entrepreneurs need to work with BDI. Whether you're just starting out, 
        looking to grow, wanting to enter the APAC region, or need administrative or strategic support, they're the perfect team.
      <br />
      <br />
      They make your problems their problems and then they solve them for you. For entrepreneurs and business owners, that's just invaluable.`,
  },
];

function Testimonial() {
  return (
    <div
      id="/Testimonials"
      className="w-full md:max-w-2xl lg:max-w-6xl flex flex-col items-center py-16"
    >
      <h1
        className="text-3xl md:text-3xl lg:text-5xl xl:text-7xl font-bold text-[#F0AE4F] uppercase mb-8 text-center"
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
      >
        our clients say
      </h1>

      <div className="relative z-20 w-full mt-8 md:mt-12 flex flex-col items-center">
        {/* Background Box */}
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div
            className="rounded-2xl border-neutral-800 bg-neutral-900/50 text-center shadow-lg w-full max-w-4xl md:h-full lg:h-5/6 xl:h-96 sm:border sm:flex sm:items-center sm:justify-center"
            data-aos="fade-right"
            data-aos-duration="1000"
          ></div>
        </div>

        {/* Swiper Container */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="w-full max-w-4xl"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center w-full p-6 rounded-2xl md:flex-row lg:px-12 md:p-0">
                <img
                  className="h-24 w-24 md:h-[30rem] md:w-72 lg:h-[30rem] lg:w-[20rem] rounded-full md:rounded-2xl object-cover shadow-md"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  src={testimonial.image}
                  alt={`client ${index}`}
                />
                <div
                  className="mt-4 md:mt-0 md:mx-6 text-center md:text-left text-white"
                  data-aos="fade-zoom-in"
                  data-aos-duration="1500"
                >
                  <p className="text-sm md:text-base font-medium">
                    {testimonial.name}
                  </p>
                  <p className="text-[#F0AE4F] text-sm md:text-base">
                    {testimonial.title}
                  </p>
                  <p className="text-[#F0AE4F] text-sm md:text-base">
                    {testimonial.title2}
                  </p>
                  <p
                    className="mt-4 text-xs lg:text-sm"
                    dangerouslySetInnerHTML={{ __html: testimonial.feedback }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 hidden lg:flex ">
          <button className="swiper-button-prev">
            <RiArrowLeftWideFill size={30} className="text-[#F0AE4F]" />
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0 hidden lg:flex ">
          <button className="swiper-button-next">
            <RiArrowRightWideFill size={30} className="text-[#F0AE4F]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
