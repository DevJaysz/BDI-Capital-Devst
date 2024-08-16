import BusinessSheet from "../components/BusinessSheet/BusinessSheet";
import LetsWorkTogether from "../components/LetsWorkTogether/LetsWorkTogether";
import Testimonial from "../components/Testimonials/Testimonial";
import TrackRecord from "../components/TrackRecord/TrackRecord";
import TypeWriter from "../components/TypeWriter/TypeWriter";
import WhoAreWe from "../components/WhoAreWe/WhoAreWe";

function OurJourney() {
  return (
    <>
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 -mt-16 lg:-mt-20   ">
        <TypeWriter />
      </section>
      <hr className="  dark:border-gray-700 w-full" />
      <section className="  container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen  px-8">
        <BusinessSheet />
      </section>
      <hr className="  dark:border-gray-700 w-full" />
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen  px-8">
        <WhoAreWe />
      </section>
      <hr className="  dark:border-gray-700 w-full" />
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen  px-8">
        <LetsWorkTogether />
      </section>
      <hr className="  dark:border-gray-700 w-full" />
      <section className=" container mx-auto flex flex-col  items-center justify-center   h-auto min-h-screen px-8">
        <TrackRecord />
      </section>
      <hr className="  dark:border-gray-700 w-full" />
      <section className=" container mx-auto  flex flex-col  items-center justify-center   h-auto min-h-screen px-8">
        <Testimonial />
      </section>
    </>
  );
}

export default OurJourney;
