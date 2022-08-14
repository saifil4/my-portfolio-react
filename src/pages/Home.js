import React, { useState } from "react";
import AppNav from "../components/layouts/nav";
import Intro from "../components/layouts/intro/intro";
import Work from "../components/layouts/work/work";
import { AnimatePresence } from "framer-motion";
import About from "../components/layouts/about/About";
import ContactInfo from "../components/layouts/contact-info/ContactInfo";
import ContactModal from "../components/layouts/contact-modal";

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
