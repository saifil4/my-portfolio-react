import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import NavIcon from "./NavIcon";
import MobileMenu from "./MobileMenu";

import NavLogo from "./NavLogo";
import { Link } from "react-router-dom";

const AppNav = ({ open }) => {
  const [expand, setExpand] = useState(false);
  const toggleLinks = () => setExpand(!expand);

  const handleLinkedinClick = () =>
    window.open("https://www.linkedin.com/in/saifil-momin/", "_blank");

  const handleGithubClick = () =>
    window.open("https://github.com/saifil4", "_blank");

  return (
    <div className="h-14 w-full flex justify-between items-center md:px-32 px-6 sticky top-0 z-20 bg-white">
      <NavLogo />
      <ul className="hidden md:flex md:flex-row md:gap-5">
        <li className="text-md font-medium">
          <Link to="/">Home</Link>
        </li>
        <li className="text-md font-medium cursor-pointer">
          <a onClick={open}>Contact</a>
        </li>
      </ul>
      <span className="hidden md:inline-flex gap-3">
        <NavIcon icon={FaLinkedin} onClick={handleLinkedinClick} />
        <NavIcon icon={FaGithub} onClick={handleGithubClick} />
      </span>
      <span className="inline-flex md:hidden gap-3">
        <NavIcon icon={BiMenu} onClick={toggleLinks} />
      </span>
      <MobileMenu expand={expand} open={open} />
    </div>
  );
};

export default AppNav;
