import React from "react";
import agileBoardImg from "../../../assets/images/agile-board/poster-image.svg";
import portfolioImg from "../../../assets/images/portfolio/poster-image.svg";
import covidTrackerImg from "../../../assets/images/covid-tracker/poster-image.svg";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const projects = {
  agileBoard: {
    name: "Agile Board",
    image: agileBoardImg,
    skills: ["HTML", "CSS", "Javascript"],
  },
  portfolio: {
    name: "Portfolio Website",
    image: portfolioImg,
    skills: ["HTML", "CSS", "Javascript"],
  },
  covid: {
    name: "Covid Tracker",
    image: covidTrackerImg,
    skills: ["HTML", "CSS", "Javascript"],
  },
  linesandboxes: {
    name: "Lines and Boxes",
    image: covidTrackerImg,
    skills: ["HTML", "CSS", "Javascript"],
  },
};

const Project = ({ type }) => {
  console.log(type);

  const naviagate = useNavigate();

  const handleClick = () => {
    naviagate(`/detail?project=${type}`);
  };

  return (
    <div className="pt-5 md:pr-5 pb-5 w-100 hover:scale-105 transition-all cursor-pointer">
      <div className="bg-gray-50">
        <div className="text-left relative">
          <img className="w-100" src={projects[type].image} />

          <div className="absolute bottom-0 bg-black/50">
            <h4 className="font-semibold text-xl text-white px-3 py-1">
              {projects[type].name}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
