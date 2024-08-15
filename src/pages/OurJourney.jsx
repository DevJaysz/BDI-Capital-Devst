import BusinessSheet from "../components/BusinessSheet/BusinessSheet";
import LetsWorkTogether from "../components/LetsWorkTogether/LetsWorkTogether";
import Testimonial from "../components/Testimonials/Testimonial";
import TrackRecord from "../components/TrackRecord/TrackRecord";
import TypeWriter from "../components/TypeWriter/TypeWriter";
import WhoAreWe from "../components/WhoAreWe/WhoAreWe";

function OurJourney() {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-screen min-h-screen  mx-8 -mt-24  md:-mt-36  lg:-mt-44 xl:-mt-56">
        <TypeWriter />
      </section>
      <section className=" flex flex-col items-center justify-center h-auto min-h-screen  mx-8">
        <BusinessSheet />
      </section>
      <section className="flex flex-col  items-center justify-center   h-auto min-h-screen mx-8">
        <WhoAreWe />
      </section>
      <section className="flex flex-col  items-center justify-center   h-auto min-h-screen mx-8">
        <LetsWorkTogether />
      </section>
      <section className="flex flex-col  items-center justify-center   h-auto min-h-screen mx-8">
        <TrackRecord />
      </section>
      <section className="flex flex-col  items-center justify-center   h-auto min-h-screen mx-8">
        <Testimonial />
      </section>
    </>
  );
}

export default OurJourney;
