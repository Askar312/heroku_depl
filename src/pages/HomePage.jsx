import React from "react";
import Hero from "../components/Home/Hero";
import Section1 from "../components/Home/section1/Section1"
import Section2 from "../components/Home/section2/Section2"

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Section1/>
      <Section2/>
    </div>
  );
};

export default HomePage;
