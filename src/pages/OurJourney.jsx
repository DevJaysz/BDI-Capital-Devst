import BusinessSheet from "../components/BusinessSheet/BusinessSheet";
import LetsWorkTogether from "../components/LetsWorkTogether/LetsWorkTogether";
import Testimonial from "../components/Testimonials/Testimonial";
import TrackRecord from "../components/TrackRecord/TrackRecord";
import TypeWriter from "../components/TypeWriter/TypeWriter";
import WhoAreWe from "../components/WhoAreWe/WhoAreWe";

function OurJourney() {
  return (
    <>
      <section className="relative h-auto min-h-screen flex flex-col items-center justify-start m-8 mt-24">
        <TypeWriter />
      </section>
      <section className="relative h-auto min-h-screen flex flex-col items-center justify-center  m-8">
        <BusinessSheet />
      </section>
      <section className=" relative h-auto min-h-screen flex items-center m-8">
        <WhoAreWe />
      </section>
      <section className=" container  mx-auto h-auto relative min-h-screen  xs:m-8 sm:px-6 lg:px-16 lg:pt-8">
        <LetsWorkTogether />
      </section>
      <section className="min-h-screen flex items-center  justify-center ">
        <TrackRecord />
      </section>
      <section>
        <Testimonial />
      </section>
    </>
  );
}

export default OurJourney;
