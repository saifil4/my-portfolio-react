import React from "react";
import Project from "./project";
import agileBoardImg from "../../../assets/images/agile-board/poster-image.svg";
import portfolioImg from "../../../assets/images/portfolio/poster-image.svg";
import covidTrackerImg from "../../../assets/images/covid-tracker/poster-image.svg";

const projects = [
  {
    name: "Agile Board",
    image: agileBoardImg,
    skills: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "Portfolio Website",
    image: portfolioImg,
    skills: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "Covid Tracker",
    image: covidTrackerImg,
    skills: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "Lines and Boxes",
    image: covidTrackerImg,
    skills: ["HTML", "CSS", "Javascript"],
  },
];

const Work = () => {
  return (
    <div className="py-10 md:px-32 flex flex-col px-5">
      <h1 className="text-4xl mb-5 text-black font-header font-bold">
        Personal Projects
      </h1>
      <div className="grid grid-cols-1 w-full md:grid-cols-3">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </div>
  );
};

export default Work;
