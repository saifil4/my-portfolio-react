import React from "react";
import Project from "./project";
import agileBoardImg from "../../../assets/images/agile-board/poster-image.svg";
import portfolioImg from "../../../assets/images/portfolio/poster-image.svg";
import covidTrackerImg from "../../../assets/images/covid-tracker/poster-image.svg";

const projects = [
  {
    name: "Agile Board",
    image: agileBoardImg,
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Portfolio Website",
    image: portfolioImg,
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Covid Tracker",
    image: covidTrackerImg,
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Lines and Boxes",
    image: covidTrackerImg,
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

const Work = () => {
  return (
    <div className="py-10 md:px-32 flex flex-col px-5 justify-center">
      <h1 className="text-4xl mb-5 text-black font-header font-bold text-center">
          Personal Projects
        </h1>
      <div className="grid grid-cols-1 w-3/4 md:grid-cols-2 self-center">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </div>
  );
};

export default Work;
