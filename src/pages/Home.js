import React from "react";
import Intro from "../components/layouts/intro";
import Work from "../components/layouts/work";
import About from "../components/layouts/about";
import ContactInfo from "../components/layouts/contact-info";
import Testimonials from "../components/layouts/testimonials";
import Skills from "../components/layouts/skills";
import Experience from "../components/layouts/experience";

const Home = () => {
  return (
    <>
      <Intro />
      <Work />
      <Skills />
      <Experience />
      <About />
      <Testimonials />
      <ContactInfo />
    </>
  );
};

export default Home;
