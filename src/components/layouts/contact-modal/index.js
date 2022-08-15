import React from "react";
import BackDrop from "./BackDrop";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import Form from "./form";

const ContactModal = ({ handleClose }) => {
  const dropIn = {
    hidden: {
      y: "100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      y: "-100vh",
      opacity: 0,
    },
  };
  return (
    <BackDrop onClick={handleClose}>
      <motion.form
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex flex-col space-y-3 bg-white shadow p-5 rounded"
      >
        <IoMdClose
          onClick={handleClose}
          className="text-3xl left-0 top-0 ml-1 mt-1 cursor-pointer"
        />
        <Form />
      </motion.form>
    </BackDrop>
  );
};

export default ContactModal;
