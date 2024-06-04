import React from "react";
import Hero from "../components/Hero";
import About from "../components/About.jsx";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | Heritage Medical Institute"}
        imageUrl={"/about.png"} className="animated-image"
      />
      <About imageUrl={"/whoweare.png"} className="animated-image"/>
    </>
  );
};

export default AboutUs;
