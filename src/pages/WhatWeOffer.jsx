import { Helmet } from "react-helmet";
import GetStarted from "../pages/sections/WhatWeOffer/GetStarted";
import ReadyStartUp from "../pages/sections/WhatWeOffer/ReadyStartUp";
import TimeToExit from "../pages/sections/WhatWeOffer/TimeToExit";
import YourOperations from "../pages/sections/WhatWeOffer/YourOperations";
import BusinessAdvisory from "./sections/WhatWeOffer/BusinessAdvisory";
import BusinessConsulting from "./sections/WhatWeOffer/BusinessConsulting";
import BusinessGovernance from "./sections/WhatWeOffer/BusinessGovernance";
import BusinessMentorship from "./sections/WhatWeOffer/BusinessMentorship";
import DigitalStrategy from "./sections/WhatWeOffer/DigitalStrategy";
import OperationsAndManagement from "./sections/WhatWeOffer/OperationsAndManagement";
import TransactionAdvisory from "./sections/WhatWeOffer/TransactionAdvisory";

function WhatWeOffer() {
  return (
    <>
      <Helmet>
        <title>What We Offer | BDI Capital</title>
        <meta
          name="description"
          content="We offer excellent services for exceptional founders. The services are Mergers and Acquisitions, Start-up Consultation, and more."
        />
        <meta name="keywords" content="investment services" />
      </Helmet>
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 -mt-16 lg:-mt-20 ">
        <GetStarted />
      </section>
      <hr className="  dark:border-gray-700 w-full" />
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 ">
        <ReadyStartUp />
      </section>
      <hr className="  dark:border-gray-700 w-full" />
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 ">
        <YourOperations />
      </section>
      <hr className="  dark:border-gray-700 w-full" />
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 ">
        <TimeToExit />
      </section>
      
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 ">
        <BusinessMentorship />
      </section>
      
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 mt-4 md:mt-0 ">
        <BusinessConsulting />
      </section>
     
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 mt-4 md:mt-0  ">
        <BusinessAdvisory />
      </section>
      
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 mt-4 md:mt-0 ">
        <BusinessGovernance />
      </section>
       <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 mt-4 md:mt-0">
        <DigitalStrategy />
      </section>
     
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 mt-4 md:mt-0">
        <OperationsAndManagement />
      </section>
     
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 ">
        <TransactionAdvisory />
      </section>
    </>
  );
}

export default WhatWeOffer;
