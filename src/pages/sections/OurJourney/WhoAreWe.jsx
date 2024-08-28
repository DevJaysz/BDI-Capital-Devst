import PictureLeft from "../../../assets/images/office-long-1-left.png";
import PictureRight from "../../../assets/images/office-long-1-right.png";
import { RiArrowRightWideFill } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";

function WhoAreWe() {
  // Define scroll links and offsets for different sections
  const scrollData = {
    "OUR TRACK RECORD": { id: "/TrackRecord", offset: -250 },
    "OUR INVESTMENTS": { id: "Investments", offset: -250 },
    "OUR CLIENTS SAY": { id: "/Testimonials", offset: -100 }, // Different offset for Testimonials
  };

  return (
    <>
      <div className="gap-4 items-center mx-auto max-w-screen-xl md:grid md:grid-cols lg:gap-8 lg:grid lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-2 md:pt-0 justify-center">
          <img
            className="w-full md:w-96 rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
            src={PictureLeft}
            alt="office content 1"
          />
          <img
            className="mt-4 w-full md:w-96 lg:mt-10 rounded-lg"
            data-aos="fade-down"
            data-aos-duration="1000"
            src={PictureRight}
            alt="office content 2"
          />
        </div>

        <div className="flex flex-col justify-center font-light sm:text-lg">
          <h2
            className="mb-4 mt-4 md:mt-0 text-3xl md:text-3xl lg:text-5xl xl:text-7xl font-bold text-[#F0AE4F] uppercase"
            data-aos="fade-zoom-in"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Who are we?
          </h2>

          <p
            className="text-sm md:text-base lg:text-lg max-w-full text-gray-300 text-justify"
            data-aos="fade-zoom-in"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            We believe in lowering the fail rate of startups and growing
            businesses by offering innovative solutions and tailored support.
            Our mission is to empower entrepreneurs with the resources,
            mentorship, and strategic guidance they need to navigate challenges,
            seize opportunities, and achieve sustainable growth.
          </p>

          <div
            className="flex flex-col gap-4 mt-5 cursor-pointer"
            data-aos="fade-zoom-in"
            data-aos-delay="300"
            data-aos-duration="1300"
          >
            {Object.entries(scrollData).map(([text, { id, offset }]) => (
              <ScrollLink
                key={text}
                to={id}
                smooth={true}
                duration={500}
                offset={offset}
                className="border text-sm md:text-base border-white text-white py-3 px-6 rounded-lg max-w-xs hover:bg-white hover:text-black transition duration-300 flex items-center justify-between"
              >
                {text}
                <RiArrowRightWideFill className="ml-2" />
              </ScrollLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoAreWe;
