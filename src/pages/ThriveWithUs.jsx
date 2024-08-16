import BuildingTomorrow from "../components/BuildingTomorrow/BuildingTomorrow";
import FundingYourVenture from "../components/FundingYourVenture/FundingYourVenture";
import HowDoWeInvest from "../components/HowDoWeInvest/HowDoWeInvest";
import OurApproach from "../components/OurApproach/OurApproach";

function ThriveWithUs() {
  return (
    <>
      <section className="container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8  -mt-8 lg:-mt-28">
      <BuildingTomorrow/>
    </section>
    <section className="container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8">
      <OurApproach/>
    </section>
    <section className="container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8">
      <HowDoWeInvest/>
    </section>
    <section className="container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8">
      <FundingYourVenture/>
    </section>
    
   
    
    </>
    
  );
}

export default ThriveWithUs;
