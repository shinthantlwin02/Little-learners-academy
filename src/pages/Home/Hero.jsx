import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* left content */}
        <div className="relative bg-[#FFBE99] min-w-[340px] h-[360px] md:min-w-[665px] md:h-[685px] 2xl:min-w-[765px] 2xl:h-[785px] 2xl:max-h-[785px]">
          <img
            src="/images/Kids.png"
            alt="kids"
            className="absolute bottom-1"
          />
          <img
            src="/images/Abstract-Design-Circles.png"
            alt="circles"
            className="absolute bottom-8 md:bottom-[42px] max-md:w-[300px] max-md:h-[300px] left-4 md:left-[50px] 2xl:bottom-[88.9px] 2xl:left-[103.1px]"
          />
          <div className="absolute top-0 min-w-[340px] h-[360px] md:min-w-[665px] md:h-[685px] 2xl:min-w-[765px] 2xl:h-[785px] 2xl:max-h-[785px] outline-2 -outline-offset-6">
            <div className="w-6 h-6 rounded-full bg-white border-2 absolute -top-2 -left-2"></div>
            <div className="w-6 h-6 rounded-full bg-white border-2 absolute -top-2 -right-2"></div>
            <div className="w-6 h-6 rounded-full bg-white border-2 absolute -bottom-2 -left-2"></div>
            <div className="w-6 h-6 rounded-full bg-white border-2 absolute -bottom-2 -right-2"></div>
          </div>
        </div>

        {/* right content */}
        <div>
          <h5 className="outfit-medium text-md 2xl:text-[22px] text-[#262626] underline underline-offset-6 mb-2">
            Welcome to Little Learners Academy
          </h5>
          <h1 className="raleway-extrabold text-[#1A1A1A] text-4xl 2xl:text-[54px] mb-6">
            Where Young Minds Blossom and{" "}
            <span className="text-[#FF8D4D]">Dreams Take Flight.</span>{" "}
          </h1>
          <p className="outfit-medium text-sm 2xl:text-xl text-[#333333] mb-10">
            Our kinder garden school provides a nurturing and stimulating
            environment, fostering a love for learning that lasts a lifetime.
            Join us as we embark on an exciting educational journey together!
          </p>
          <div className="bg-[#FFEFE5] flex items-center gap-6 2xl:gap-10 rounded-xl border-2 border-[#262626] px-10 py-6 shadow-[6px_6px_0px_1px_rgba(255,190,153,1)]">
            <div>
              <h1 className="outfit-extrabold text-2xl 2xl:text-[44px] mb-1 text-[#262626]">
                +7000
              </h1>
              <p className="outfit-medium text-sm 2xl:text-xl text-[#262626]">
                Students Passed Out
              </p>
            </div>
            <div>
              <h1 className="outfit-extrabold text-2xl 2xl:text-[44px] mb-1 text-[#262626]">
                +37
              </h1>
              <p className="outfit-medium text-sm 2xl:text-xl text-[#262626]">
                Awards & Recognitions
              </p>
            </div>
            <div>
              <h1 className="outfit-extrabold text-2xl 2xl:text-[44px] mb-1 text-[#262626]">
                +15
              </h1>
              <p className="outfit-medium text-sm 2xl:text-xl text-[#262626]">
                Experience Educators
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
