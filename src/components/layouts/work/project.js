import React from "react";

const Project = ({ project }) => {
  return (
    <div className="pt-5 md:pr-5 pb-5 w-100 hover:scale-105 transition-all cursor-pointer">
      <div className="bg-gray-50">
        <div className="text-left relative">
          <img className="w-100" src={project.image} />

          <div className="absolute bottom-0 bg-black/50">
            <h4 className="font-semibold text-xl text-white px-3 py-1">
              {project.name}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
