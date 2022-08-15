import React, { useState } from "react";
import AppNav from "../components/layouts/nav";
import Intro from "../components/layouts/intro";
import Work from "../components/layouts/work";
import { AnimatePresence } from "framer-motion";
import About from "../components/layouts/about";
import ContactInfo from "../components/layouts/contact-info";
import ContactModal from "../components/layouts/contact-modal";
import Testimonials from "../components/layouts/testimonials";

const Home = () => {
  const [showContact, setShowContact] = useState(false);
  const open = () =>  setShowContact(true);
  const close = () => setShowContact(false);
  
  return (
    <div>
      <AppNav open={open} />
      <Intro />
      <Work />
      <About />
      <Testimonials/>
      <ContactInfo />
      
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {showContact && <ContactModal handleClose={close} />}
      </AnimatePresence>
    </div>
  );
};

export default Home;
