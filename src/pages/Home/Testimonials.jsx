import React from "react";
import { TestimonialsData } from "../../data/data";

const Testimonials = () => {
  return (
    <div className="py-20 container mx-auto">
      {/* header */}
      <div className="flex flex-col items-center mb-16">
        <div className="bg-[#FFFFFF] px-3 py-2 border-2 border-black rounded-lg w-fit mb-4">
          <p className="outfit-medium text-[#333333] text-xs md:text-sm 2xl:text-lg text-center">
            Their Happy Words 🤗
          </p>
        </div>
        <h1 className="raleway-bold text-[#1A1A1A] text-5xl md:text-[58px] mb-6 text-center">
          Our Testimonials
        </h1>
        <p className="outfit-medium text-[#333333] text-sm md:text-md 2xl:text-xl max-w-[680px] 2xl:max-w-[992px] text-center">
          Our testimonials are heartfelt reflections of the nurturing
          environment we provide, where children flourish both academically and
          emotionally.
        </p>
      </div>
      {/* header end */}

      {/* slider */}
      <div className="flex items-center gap-6">
        <button className="bg-white p-4 border-2 border-[#333333] rounded-lg">
          <img src="/icons/arrow-left.svg" alt="arrow-left" className="w-16" />
        </button>
        <div className="flex gap-10 2xl:gap-12 xl:ps-4 2xl:ps-5 overflow-x-scroll scrollbar-hide scroll-smooth py-10">
          {TestimonialsData.map((data) => (
            <div
              key={data.id}
              className="min-w-full md:min-w-[30%] bg-white border-2 border-[#262626] p-8 2xl:p-10 rounded-lg relative shadow-[6px_6px_0px_1px_rgba(30,30,30,1)] flex flex-col items-center"
            >
              <div className="bg-[#FFF5F0] border border-[#333333] rounded-full p-2 w-fit">
                <img src={data.profile} alt="profile" className="mb-2" />
              </div>
              <h1 className="outfit-semibold font-xl 2xl:font-2xl text-[#333333] mb-8">
                {data.name}
              </h1>
              <div className="flex items-center gap-2 mb-8">
                {Array(data.rate)
                  .fill(0)
                  .map((_, index) => (
                    <img key={index} src="/icons/star-fill.svg" alt="star" />
                  ))}
              </div>
              <p className="outfit-medium text-[#333333] text-lg 2xl:text-[20px] text-center">
                {data.comment}
              </p>
            </div>
          ))}
        </div>
        <button className="bg-white p-4 border-2 border-[#333333] rounded-lg">
          <img
            src="/icons/arrow-right.svg"
            alt="arrow-right"
            className="w-16"
          />
        </button>
      </div>
      {/* slider end*/}
    </div>
  );
};

export default Testimonials;
