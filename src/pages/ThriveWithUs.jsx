import BuildingTomorrow from "../components/BuildingTomorrow/BuildingTomorrow";
import FundingYourVenture from "../components/FundingYourVenture/FundingYourVenture";
import HowDoWeInvest from "../components/HowDoWeInvest/HowDoWeInvest";
import OurApproach from "../components/OurApproach/OurApproach";
import TalktoUs from "../components/TalkToUs/TalktoUs";

function ThriveWithUs() {
  return (
    <>
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
