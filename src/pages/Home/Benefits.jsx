import React from "react";
import { BenefitsData } from "../../data/data";

const Benefits = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col items-center mb-32">
        <div className="bg-[#FFFFFF] px-3 py-2 border-2 border-black rounded-lg w-fit mb-4">
          <p className="outfit-medium text-[#333333] text-xs md:text-sm 2xl:text-lg text-center">
            Children Deserve Bright Future
          </p>
        </div>
        <h1 className="raleway-bold text-[#1A1A1A] text-5xl md:text-[58px] mb-6 text-center">
          Our Benefits
        </h1>
        <p className="outfit-medium text-[#333333] text-sm md:text-md 2xl:text-xl max-w-[680px] 2xl:max-w-[992px] text-center">
          With a dedicated team of experienced educators, state-of-the-art
          facilities, and a comprehensive curriculum, we aim to lay a strong
          foundation for your child's future.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-12 gap-y-20 container mx-auto">
        {BenefitsData.map((data) => (
          <div
            key={data.id}
            className="bg-white border-2 border-[#262626] pt-16 2xl:pt-20 pb-10 px-10 rounded-lg relative shadow-[8px_8px_0px_1px_rgba(30,30,30,1)]"
          >
            <h1 className="raleway-bold text-[#1A1A1A] text-2xl 2xl:text-[28px] mb-4">
              {data.title}
            </h1>
            <p className="outfit-medium text-[#4C4C4D] text-md 2xl:text-[20px]">
              {data.content}
            </p>

            <div className="w-16 h-16 2xl:w-[74px] 2xl:h-[74px] flex items-center justify-center bg-[#FFDECC] border-2 border-[#262626] absolute -top-8 rounded-lg">
              <img src={data.icon} alt="icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
