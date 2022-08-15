import React from "react";
import Title from "../../ui/Title";

const About = () => {
  return (
    <>
      <div className="relative px-8 md:flex-row md:px-32">
        <div className="col-span-4">
         <Title label="About me" />
          <p className="mt-5">
            Currently, I am working for a company called Webisoft as a Software
            Developer for over a year. Here, so far I have delivered 3 solo
            projects where I was responsible for front-end development and
            communicating requirements with clients, designers and backend
            developers. I also helped deliver 4 other projects collaborating
            with my teammates. In these projects I worked with several
            technologies, frameworks and libraries including React, Electron,
            PHP, Laravel etc. while maintaining a good code quality. In my
            previous role, I worked on a SaaS platform, building, and delivering
            features like interactive dashboards for varied users while working
            in an agile environment. I worked in Angular during 2.5 years of my
            tenure.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
