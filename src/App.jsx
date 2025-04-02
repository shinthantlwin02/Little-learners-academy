import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

const App = () => {
  return (
    <div className="bg-[#FFF5F0]">
      <Banner />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
