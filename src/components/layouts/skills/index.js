import React from "react";
import SkillCategory from "./SkillCategory";

function Skills() {
  const skills = [
    "React",
    "Angular",
    "CSS",
    "HTML",
    "JavaScript",
    "SQL",
    "Node JS",
    "Tailwind CSS",
    "Bootstrap",
  ];

  const skillList = [
    {
      title: "Front-end",
      skills: ["HTML", "CSS", "JavaScript", "React", "Angular", "React", "React"],
    },
    {
      title: "Back-end",
      skills: ["Node JS", "Express", "MySQL", "React", "React", "React", "React"],
    },
    {
      title: "Design",
      skills: ["Adobe XD", "Figma", "Wireframing", "React", "Prototyping"],
    },
  ];

  return (
    <div className="py-10 md:px-32 px-5">
      <div className="flex flex-row gap-x-2">
        {skillList.map((skillCategory) => (
          <SkillCategory skillCategory={skillCategory} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
