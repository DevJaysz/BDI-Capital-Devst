import JoinMovement from "./sections/OurPeople/JoinMovement";
import OurMission from "./sections/OurPeople/OurMission";
import OurTeam from "./sections/OurPeople/OurTeam";

function OurPeople() {
  return (
    <>
      <section className="container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 md:px-28 lg:px-8 -mt-10">
        <OurTeam />
      </section>
      <section className="container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 md:px-28 lg:px-8">
        <OurMission />
      </section>
      <section className="container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 md:px-28 lg:px-8">
        <JoinMovement />
      </section>
    </>
  );
}

export default OurPeople;
