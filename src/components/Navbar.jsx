import React, { useState } from "react";

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState(null);
  return (
    <div className="flex justify-between max-md:items-center rounded-lg border-2 bg-[#FF8D4D] md:bg-white border-[#262626] mx-10 h-16">
      <div className="bg-[#FF8D4D] flex items-center gap-2 px-4 h-full rounded-s-md">
        <img src="/icons/logo.svg" alt="logo" />
        <h1>Little Learners</h1>
      </div>

      <div className="max-md:hidden">
        <button
          className={`${
            activeNavItem === 1 ? "bg-[#FFEFE5]" : "bg-white"
          } border-x-2 border-x-[#262626] px-4 h-full`}
          onClick={() => setActiveNavItem(1)}
        >
          Home
        </button>
        <button
          className={`${
            activeNavItem === 2 ? "bg-[#FFEFE5]" : "bg-white"
          } border-r-2 border-r-[#262626] px-4 h-full`}
          onClick={() => setActiveNavItem(2)}
        >
          About Us
        </button>
        <button
          className={`${
            activeNavItem === 3 ? "bg-[#FFEFE5]" : "bg-white"
          } border-r-2 border-r-[#262626] px-4 h-full`}
          onClick={() => setActiveNavItem(3)}
        >
          Academics
        </button>
        <button
          className={`${
            activeNavItem === 4 ? "bg-[#FFEFE5]" : "bg-white"
          } border-r-2 border-r-[#262626] px-4 h-full`}
          onClick={() => setActiveNavItem(4)}
        >
          Admissions
        </button>
        <button
          className={`${
            activeNavItem === 5 ? "bg-[#FFEFE5]" : "bg-white"
          } border-r-2 border-r-[#262626] px-4 h-full`}
          onClick={() => setActiveNavItem(5)}
        >
          Student Life
        </button>
        <button className={`bg-[#FFAE80] px-4 h-full rounded-e-md`}>
          Contact
        </button>
      </div>

      <div className="md:hidden p-4">
        <img src="/icons/burger-bar.png" alt="menu" className="w-8 h-8"/>
      </div>
    </div>
  );
};

export default Navbar;
