import React, { useState } from "react";
import { FAQDatas } from "../../data/data";

const FAQ = () => {
  const [activeAccordian, setActiveAccordian] = useState(1);
  return (
    <div className="container mx-auto py-20">
      {/* header */}
      <div className="flex flex-col items-center mb-16">
        <div className="bg-[#FFFFFF] px-3 py-2 border-2 border-black rounded-lg w-fit mb-4">
          <p className="outfit-medium text-[#333333] text-xs md:text-sm 2xl:text-lg text-center">
            Solutions For The Doubts
          </p>
        </div>
        <h1 className="raleway-bold text-[#1A1A1A] text-5xl md:text-[58px] mb-6 text-center">
          Frequently Asked Questions
        </h1>
        <p className="outfit-medium text-[#333333] text-sm md:text-md 2xl:text-xl max-w-[680px] 2xl:max-w-[992px] text-center">
          Find all the essential information you need in our FAQ section,
          designed to address the most frequently asked questions and help you
          make informed decisions for your child's education.
        </p>
      </div>
      {/* header end */}

      {/* accordion */}
      <div className="flex gap-10">
        <div className="flex flex-col gap-y-5 w-[50%]">
          {FAQDatas.slice(0, 4).map((data) => (
            <div
              onClick={() => setActiveAccordian(data.id)}
              className={`px-10 py-8 flex ${
                activeAccordian === data.id
                  ? "bg-white items-start"
                  : "bg-[#FFEFE5] items-center"
              } gap-4 border-2 border-[#262626] rounded-lg`}
            >
              <div className="w-full">
                <h1>{data.question}</h1>
                <hr
                  className={`${
                    activeAccordian === data.id ? "" : "hidden"
                  } my-6 border border-[#262626]`}
                />
                <p className={`${activeAccordian === data.id ? "" : "hidden"}`}>
                  {data.answer}
                </p>
              </div>
              <button className="w-12 h-10 flex items-center justify-center bg-[#FFF5F0] rounded-lg border-2 border-[#262626]">
                <img
                  src={
                    activeAccordian === data.id
                      ? "/icons/minus.svg"
                      : "/icons/plus.svg"
                  }
                  alt="btn"
                />
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-5 w-[50%]">
          {FAQDatas.slice(4, 9).map((data) => (
            <div
              onClick={() => setActiveAccordian(data.id)}
              className={`px-10 py-8 flex ${
                activeAccordian === data.id
                  ? "bg-white items-start"
                  : "bg-[#FFEFE5] items-center"
              } gap-4 border-2 border-[#262626] rounded-lg`}
            >
              <div className="w-full">
                <h1>{data.question}</h1>
                <hr
                  className={`${
                    activeAccordian === data.id ? "" : "hidden"
                  } my-6 border border-[#262626]`}
                />
                <p className={`${activeAccordian === data.id ? "" : "hidden"}`}>
                  {data.answer}
                </p>
              </div>
              <button className="w-12 h-10 flex items-center justify-center bg-[#FFF5F0] rounded-lg border-2 border-[#262626]">
                <img
                  src={
                    activeAccordian === data.id
                      ? "/icons/minus.svg"
                      : "/icons/plus.svg"
                  }
                  alt="btn"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* accordion end */}
    </div>
  );
};

export default FAQ;
