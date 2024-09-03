import { Helmet } from "react-helmet";
import BuildingTomorrow from "./sections/ThriveWithUs/BuildingTomorrow";
import FundingYourVenture from "./sections/ThriveWithUs/FundingYourVenture";
import HowDoWeInvest from "./sections/ThriveWithUs/HowDoWeInvest";
import OurApproach from "./sections/ThriveWithUs/OurApproach";
import TalktoUs from "./sections/ThriveWithUs/TalktoUs";

function ThriveWithUs() {
  return (
    <>
      <Helmet>
        <title>Thrive With Us | BDI Capital</title>
        <meta
          name="description"
          content="We invest in a venture that will make a positive and eco-friendly contribution to the world. Grow your business with BDI Capital."
        />
        <meta name="keywords" content="Grow with BDI Capital" />
      </Helmet>
      <section className="container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8  -mt-8 ">
        <BuildingTomorrow />
      </section>
      <hr className="  dark:border-gray-700 w-full" />
      <section className="container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8">
        <OurApproach />
      </section>
      <hr className="  dark:border-gray-700 w-full" />
      <section className="container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8">
        <HowDoWeInvest />
      </section>
      <hr className="  dark:border-gray-700 w-full" />
      <section className="container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8">
        <FundingYourVenture />
      </section>
      <hr className="  dark:border-gray-700 w-full" />
      <section className="container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8">
        <TalktoUs />
      </section>
    </>
  );
}

export default ThriveWithUs;
