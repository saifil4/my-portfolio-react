import React from "react";
import { motion } from "framer-motion";
import DownloadButton from "./DownloadButton";
// import Saifil from '../assets/images/saifil.jpg';

const Intro = () => {
  return (
    <div className="relative justify-center flex flex-row bg-theme-blue text-white px-8 md:h-[calc(100vh-3.5rem)] md:flex-row md:px-32">
      <div className="h-[calc(100vh-3.5rem)] max-w-3xl flex w-full flex-col justify-center items-baseline space-y-4 md:h-auto">
        <motion.h1
          initial={{ x: "-5%", y: "-30%", opacity: 0 }}
          animate={{ x: "0", y: "0", opacity: 1 }}
          transition={{
            duration: 1,
            ease: "linear",
            delay: 0.5,
            type: "spring",
            damping: 25,
            stiffness: 300,
          }}
          className="text-4xl w-100 text-center font-semibold font-header leading-tight md:text-5xl"
        >
          Hello, I am Saifil
        </motion.h1>
        <motion.h1
          initial={{ x: "-5%", y: "-30%", opacity: 0 }}
          animate={{ x: "0", y: "0", opacity: 1 }}
          transition={{
            duration: 1,
            ease: "linear",
            delay: 0.5,
            type: "spring",
            damping: 25,
            stiffness: 300,
          }}
          className="text-4xl w-100 text-center font-semibold font-header leading-tight md:text-5xl"
        >
          A Software Engineer
        </motion.h1>
        <motion.p
          initial={{ x: "0", y: "40%", opacity: 0 }}
          animate={{ x: "0", y: "0", opacity: 1 }}
          transition={{
            duration: 1,
            ease: "linear",
            delay: 0.5,
            type: "spring",
            damping: 25,
            stiffness: 300,
          }}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea
        </motion.p>
        <motion.div
          className="mt-5 w-full text-center md:text-left"
          initial={{ height: 0, overflow: "hidden" }}
          animate={{ height: "auto" }}
          transition={{
            duration: 1,
            ease: "linear",
            delay: 0.5,
            type: "spring",
            damping: 25,
            stiffness: 300,
          }}
        >
          <button className="py-2 px-5 bg-white border font-medium text-theme-blue rounded mr-5">
            Contact me
          </button>
          <DownloadButton />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
