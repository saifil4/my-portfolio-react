import React from "react";

const Experience = () => {
  const experience = [
    {
      company: "BPM-D",
      position: "Associate Solution Developer",
      startDate: "",
      endDate: "",
    },
  ];
  return (
    <div className="py-40 bg-white px-32">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center mb-3 text-black">
          Experience
        </h1>
        <div className="text-left flex gap-x-2">
          <div className="bg-gray-50 p-3 w-1/3">
            <p className="font-medium">Software Developer</p>
            <p>Webisoft</p>
            <p>2021</p>
          </div>
          <div>
            <p className="font-medium">Solutions Developer</p>
            <p>Webisoft</p>
            <p>2021</p>
          </div>
          <div>
            <p className="font-medium">Associate Solutions Developer</p>
            <p>Webisoft</p>
            <p>May 2017 - March 2019</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
