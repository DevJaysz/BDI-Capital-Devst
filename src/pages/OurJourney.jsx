import BusinessSheet from "../components/BusinessSheet/BusinessSheet";
import LetsWorkTogether from "../components/LetsWorkTogether/LetsWorkTogether";
import Testimonial from "../components/Testimonials/Testimonial";
import TrackRecord from "../components/TrackRecord/TrackRecord";
import TypeWriter from "../components/TypeWriter/TypeWriter";
import WhoAreWe from "../components/WhoAreWe/WhoAreWe";

function OurJourney() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-start bg-[#111111] text-white px-4 pt-24">
        <TypeWriter />
      </div>
      <div className="relative flex flex-col items-center justify-center min-h-screen  p-8 text-gray-500 sm:text-lg dark:text-gray-400 ">
        <BusinessSheet />
      </div>
      <div className="min-h-screen flex items-center">
        <WhoAreWe />
      </div>
      <div>
        <LetsWorkTogether />
      </div>
      <div className="min-h-screen text-gray-300 ">
        <TrackRecord />
      </div>
      <div>
        <Testimonial />
      </div>
    </>
  );
}

export default OurJourney;
