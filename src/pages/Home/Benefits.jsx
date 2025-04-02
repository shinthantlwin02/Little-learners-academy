import React from "react";

const Benefits = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col items-center">
        <div className="bg-[#FFFFFF] px-3 py-2 border-2 border-black rounded-lg w-fit mb-4">
          <p className="outfit-medium text-[#333333] text-xs md:text-sm 2xl:text-lg text-center">
            Children Deserve Bright Future
          </p>
        </div>
        <h1 className="raleway-bold text-[#1A1A1A] text-5xl md:text-[58px] mb-4 text-center">
          Our Benefits
        </h1>
        <p className="outfit-medium text-[#333333] text-sm md:text-md 2xl:text-xl max-w-[680px] 2xl:max-w-[992px] text-center">
          With a dedicated team of experienced educators, state-of-the-art
          facilities, and a comprehensive curriculum, we aim to lay a strong
          foundation for your child's future.
        </p>
      </div>
    </div>
  );
};

export default Benefits;
