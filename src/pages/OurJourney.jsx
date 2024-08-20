import BusinessSheet from "./sections/OurJourney/BusinessSheet";
import LetsWorkTogether from "./sections/OurJourney/LetsWorkTogether";
import Testimonial from "./sections/OurJourney/Testimonial";
import TrackRecord from "./sections/OurJourney/TrackRecord";
import TypeWriter from "./sections/OurJourney/TypeWriter";
import WhoAreWe from "./sections/OurJourney/WhoAreWe";

function OurJourney() {
  return (
    <>
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 md:px-28 lg:px-8 -mt-16 lg:-mt-20   ">
        <TypeWriter />
      </section>
      <hr className="  dark:border-gray-700 w-full" />
      <section className="  container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen    px-8 md:px-28 lg:px-8 ">
        <BusinessSheet />
      </section>
      <hr className="  dark:border-gray-700 w-full" />
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen   px-8 md:px-28 lg:px-8">
        <WhoAreWe />
      </section>
      <hr className="  dark:border-gray-700 w-full" />
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen   px-8 md:px-28 lg:px-8">
        <LetsWorkTogether />
      </section>
      <hr className="  dark:border-gray-700 w-full" />
      <section className=" container mx-auto flex flex-col  items-center justify-center   h-auto min-h-screen  px-8 md:px-28  lg:px-8">
        <TrackRecord />
      </section>
      <hr className="  dark:border-gray-700 w-full" />
      <section className=" container mx-auto  flex flex-col  items-center justify-center   h-auto min-h-screen    px-8 md:px-28 lg:px-8">
        <Testimonial />
      </section>
    </>
  );
}

export default OurJourney;
