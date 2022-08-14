import React from "react";
import { IoMdSend } from "react-icons/io";

const SendButton = () => {
  return (
    <button className="w-full inline-flex justify-center text-lg text-white bg-black py-3 rounded items-center">
      Send <IoMdSend className="ml-3 text-xl" />
    </button>
  );
};

export default SendButton;
