import React from "react";
import Hero from "../components/Hero/Index/Main";
import Trustee from "../components/Trustee/Index/Main";
import About from "../components/About/Index/Main";
import Portfolio_banner from "../components/Portfolio_banner/Index/Main"

const Home = () => {
  return (
    <div>
      <Hero />
      <Trustee />
      <About />
      <Portfolio_banner/>
    </div>
  );
};

export default Home;
