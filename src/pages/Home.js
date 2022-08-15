import React from "react";
import Intro from "../components/layouts/intro";
import Work from "../components/layouts/work";
import About from "../components/layouts/about";
import ContactInfo from "../components/layouts/contact-info";
import Testimonials from "../components/layouts/testimonials";

const Home = () => {
  return (
    <>
      <Intro />
      <Work />
      <About />
      <Testimonials />
      <ContactInfo />
    </>
  );
};

export default Home;
