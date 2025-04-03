import React from "react";
import Hero from "./Hero";
import Benefits from "./Benefits";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Explore from "./Explore";

const Home = () => {
  return (
    <div className="max-md:px-4">
      <Hero />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Explore />
    </div>
  );
};

export default Home;
