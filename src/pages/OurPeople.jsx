import { Helmet } from "react-helmet";
import JoinMovement from "./sections/OurPeople/JoinMovement";
import OurCoreValues from "./sections/OurPeople/OurCore";
import OurMission from "./sections/OurPeople/OurMission";
import OurTeam from "./sections/OurPeople/OurTeam";

function OurPeople() {
  return (
    <>
      <Helmet>
        <title>Our People | BDI Capital</title>
        <meta
          name="description"
          content="Our mission is to create first-world innovations for an eco-friendly world. Join the movement for a sustainable future for all."
        />
        <meta name="keywords" content="create innovations" />
      </Helmet>
      <section className="container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 md:px-28 lg:px-8 -mt-10">
        <OurTeam />
      </section>
      <hr className="  dark:border-gray-700 w-full" />
      <section className="container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 md:px-28 lg:px-8">
        <OurMission />
      </section>
      <hr className="  dark:border-gray-700 w-full" />
      <section className="container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 md:px-28 lg:px-8">
        <OurCoreValues />
      </section>
     
      <section className="container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 md:px-28 lg:px-8">
        <JoinMovement />
      </section>
    </>
  );
}

export default OurPeople;
