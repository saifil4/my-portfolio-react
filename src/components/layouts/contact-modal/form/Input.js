import React from "react";

const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      className="px-5 py-3 w-96 bg-gray-50 border-b-2 outline-none border-gray-300 focus:border-black"
      placeholder={placeholder}
    />
  );
};

export default Input;
