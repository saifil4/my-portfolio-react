import React from "react";

const Title = ({ label, isCentered = false }) => {
  return (
    <h1
      className={`text-4xl mb-5 text-black font-header font-bold ${
        isCentered && "text-center"
      }`}
    >
      {label}
    </h1>
  );
};

export default Title;
