import React from "react";
import SkillItem from "./SkillItem";

const SkillCategory = ({ skillCategory }) => {
  return (
    <div className="w-full">
      <h1 className="text-center py-3 font-header font-bold text-xl bg-gray-100">{skillCategory.title}</h1>
      <ul>
        {skillCategory.skills.map((skillItem) => (
          <SkillItem skillItem={skillItem} />
        ))}
      </ul>
    </div>
  );
};

export default SkillCategory;
