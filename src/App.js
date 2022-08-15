import React, { useState } from "react";
import Home from "./pages/Home";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail";
import { AnimatePresence } from "framer-motion";
import AppNav from "./components/layouts/nav";
import ContactModal from "./components/layouts/contact-modal";

function App() {
  const location = useLocation();
  const [showContact, setShowContact] = useState(false);
  const open = () => setShowContact(true);
  const close = () => setShowContact(false);
  return (
    <AnimatePresence>
      <AppNav open={open} />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<ProjectDetail />} />
      </Routes>
      {showContact && <ContactModal handleClose={close} />}
    </AnimatePresence>
  );
}

export default App;
