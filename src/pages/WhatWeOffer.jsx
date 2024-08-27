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
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 -mt-16 lg:-mt-20">
        <GetStarted />
      </section>
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 ">
        <ReadyStartUp />
      </section>
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 ">
        <YourOperations />
      </section>
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 ">
        <TimeToExit />
      </section>
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 ">
        <BusinessMentorship />
      </section>
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 ">
        <BusinessConsulting />
      </section>
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 ">
        <BusinessAdvisory />
      </section>
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 ">
        <BusinessGovernance />
      </section>
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 ">
        <DigitalStrategy />
      </section>
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 ">
        <OperationsAndManagement />
      </section>
      <section className=" container mx-auto  flex flex-col items-center justify-center h-auto min-h-screen px-8 ">
        <TransactionAdvisory />
      </section>
    </>
  );
}

export default WhatWeOffer;
