import React from "react";
import { Accordion } from "./Accordian";

export const SixthSection = () => {
  return (
    <div className="flex text-center justify-evenly">
      <div className="w-[503px] h-[503px] ">
        <img src="/bot-logo-left.svg" alt="" />
      </div>
      <div className=" flex flex-col items-center  w-[640px]">
        <p
          className="text-[44px] mb-[70px] text-[#ED0137] w-[119px] h-[52px] "
        >
          FAQ
        </p>
        <div>
          <Accordion title="1. Why choose 'Savior'?" answer="After the IDO concludes, you can claim the tokens on our official website." />
          <Accordion title="2. Why is the IDO duration so long?" answer="After the IDO concludes, you can claim the tokens on our official website." />
          <Accordion title="3. When will trading go live?" answer="After the IDO concludes, you can claim the tokens on our official website." />
          <Accordion title="4. When can we claim the tokens?" answer="After the IDO concludes, you can claim the tokens on our official website." />
          {/* <Accordion title="5. Why choose 'Savior'?" answer="After the IDO concludes, you can claim the tokens on our official website." /> */}
        </div>
      </div>
    </div>
  );
};
