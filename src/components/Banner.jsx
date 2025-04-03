import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center justify-center gap-2 relative bg-[#FFDECC] border-2 border-[#262626] h-[58px] rounded-lg mx-10 mb-3">
      <p>Admission is Open, Grab your seat now</p>
      <img src="/icons/arrow-right.svg" alt="arrow-right" />
      <img
        src="/images/Abstract-Design-1.png"
        alt="design"
        className="absolute top-0 left-0 max-h-[56px]"
      />
      <img
        src="/images/Abstract-Design-2.png"
        alt="design"
        className="absolute top-0 left-[400px] 2xl:left-[521px] max-h-[56px] max-md:hidden"
      />
      <img
        src="/images/Abstract-Design-3.png"
        alt="design"
        className="absolute bottom-0 right-[400px] 2xl:right-[512px] max-h-[56px] max-md:hidden"
      />
      <img
        src="/images/Abstract-Design-4.png"
        alt="design"
        className="absolute top-0 right-0 max-h-[56px] max-md:hidden"
      />
    </div>
  );
};

export default Banner;
