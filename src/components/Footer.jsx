import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto py-10 max-md:px-4">
      <footer className="bg-white border-2 border-[#262626] shadow-[6px_6px_0px_1px_rgba(30,30,30,1)] rounded-xl pt-10 md:pt-20 px-8 md:px-24 2xl:pt-[100px] 2xl:px-[113px] pb-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="mr-20">
            <div className="flex items-center gap-3 mb-4">
              <img src="/icons/logo.svg" alt="logo" />
              <h1 className="text-2xl text-[#262626] outfit-bold">
                Little Learners
              </h1>
            </div>

            <p className="outfit-medium text-md text-[#4C4C4D] mb-6">
              We believe in the power of play to foster creativity,
              problem-solving skills, and imagination.
            </p>

            <div className="flex items-center gap-2 mb-3">
              <img
                src="/icons/mail.svg"
                alt="mail"
                className="bg-[#FFF5F0] border-2 border-[#262626] rounded-lg p-1"
              />
              <p className="outfit-medium text-[#262626] text-md">
                hello@littlelearners.com
              </p>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <img
                src="/icons/phone.svg"
                alt="mail"
                className="bg-[#FFF5F0] border-2 border-[#262626] rounded-lg p-1"
              />
              <p className="outfit-medium text-[#262626] text-md">
                +91 91813 23 2309
              </p>
            </div>

            <div className="flex items-center gap-2">
              <img
                src="/icons/pin.svg"
                alt="mail"
                className="bg-[#FFF5F0] border-2 border-[#262626] rounded-lg p-1"
              />
              <p className="outfit-medium text-[#262626] text-md">
                Somewhere in the World
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <a href="/" className="outfit-semibold text-[#262626] text-md mb-6">
              Home
            </a>
            <a href="/" className="outfit-medium text-[#333333] text-md mb-2">
              Features
            </a>
            <a href="/" className="outfit-medium text-[#333333] text-md mb-2">
              Our Testimonials
            </a>
            <a href="/" className="outfit-medium text-[#333333] text-md mb-2">
              FAQ
            </a>
          </div>

          <div className="flex flex-col">
            <a href="/" className="outfit-semibold text-[#262626] text-md mb-6">
              About Us
            </a>
            <a href="/" className="outfit-medium text-[#333333] text-md mb-2">
              Our Mission
            </a>
            <a href="/" className="outfit-medium text-[#333333] text-md mb-2">
              Our Vission
            </a>
            <a href="/" className="outfit-medium text-[#333333] text-md mb-2">
              Awards and Recognitions
            </a>
            <a href="/" className="outfit-medium text-[#333333] text-md mb-2">
              History
            </a>
            <a href="/" className="outfit-medium text-[#333333] text-md mb-2">
              Teachers
            </a>
          </div>

          <div className="flex flex-col">
            <a href="/" className="outfit-semibold text-[#262626] text-md mb-6">
              Academics
            </a>
            <a href="/" className="outfit-medium text-[#333333] text-md mb-2">
              Special Features
            </a>
            <a href="/" className="outfit-medium text-[#333333] text-md mb-2">
              Gallery
            </a>
          </div>

          <div className="flex flex-col">
            <a href="/" className="outfit-semibold text-[#262626] text-md mb-6">
              Contact Us
            </a>
            <a href="/" className="outfit-medium text-[#333333] text-md mb-2">
              Information
            </a>
            <a href="/" className="outfit-medium text-[#333333] text-md mb-2">
              Map & Direction
            </a>
          </div>
        </div>

        <hr className="border border-[#262626] w-full my-10" />

        <div className="flex flex-col max-md:gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <p className="outfit-medium text-[#333333] text-md 2xl:text-lg">
              Terms of Service
            </p>
            <hr className="h-5 border border-[#262626]" />
            <p className="outfit-medium text-[#333333] text-md 2xl:text-lg">
              Privacy Policy
            </p>
            <hr className="h-5 border border-[#262626]" />
            <p className="outfit-medium text-[#333333] text-md 2xl:text-lg">
              Cookie Policy
            </p>
          </div>

          <div className="flex items-center max-md:justify-between gap-2">
            <img
              src="/icons/facebook.svg"
              alt="facebook"
              className="p-3 2xl:p-4 rounded-lg bg-[#FFDECC] border-2 border-[#262626]"
            />
            <img
              src="/icons/twitter.svg"
              alt="twitter"
              className="p-3 2xl:p-4 rounded-lg bg-[#FFDECC] border-2 border-[#262626]"
            />
            <img
              src="/icons/linkedIn.svg"
              alt="linkedIn"
              className="p-3 2xl:p-4 rounded-lg bg-[#FFDECC] border-2 border-[#262626]"
            />
          </div>
        </div>

        <hr className="border border-[#262626] w-full my-10" />

        <p className="outfit-medium text-[#656567] text-md 2xl:text-lg text-center">
          Copyright &copy; [2023] Little Learners Academy. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
