import GetStarted from "../pages/sections/WhatWeOffer/GetStarted";
import ReadyStartUp from "../pages/sections/WhatWeOffer/ReadyStartUp";
import TimeToExit from "../pages/sections/WhatWeOffer/TimeToExit";
import YourOperations from "../pages/sections/WhatWeOffer/YourOperations";

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
    </>
  );
}

export default WhatWeOffer;
