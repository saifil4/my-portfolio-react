import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Project = ({ project }) => {
  return (
    <div className="pt-5 md:pr-5 pb-5 w-100 cursor-pointer">
      <div className="text-left relative">
        <img className="w-100" src={project.image} />
        <div className=" py-1">
          <ul className="flex gap-x-5 my-2">
            {project.skills.map((project) => (
              <li className="font-medium text-gray-400 text-sm">#{project}</li>
            ))}
          </ul>
          <h4 className="font-bold text-xl text-black">{project.name}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            porro totam, nostrum.
          </p>
          <a className="flex gap-x-2 items-center my-2 underline underline-offset-2 text-blue-600">
            Learn more <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
