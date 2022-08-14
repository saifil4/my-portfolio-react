import React from "react";
import SendButton from "./SendButton";
import Input from "./Input";

const Form = () => {
  return (
    <>
      <h1 className="w-96 font-bold text-4xl mb-2 text-center">Get in touch</h1>
      <p className="opacity-50 text-lg mb-10 text-center font-medium">
        Tell me about your awesome ideas!
      </p>
      <label></label>
      <Input type="email" placeholder="Your Name" />
      <Input type="text" placeholder="abc@example.com" />
      <textarea
        rows={5}
        className="px-5 py-3 w-96 bg-gray-50 border-b-2 outline-none border-gray-300 focus:border-black"
        placeholder="Your Message"
      ></textarea>
      <SendButton />
    </>
  );
};

export default Form;
