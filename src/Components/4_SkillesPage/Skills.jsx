import React from "react";
import "../4_SkillesPage/Skills.css";
import { IoLogoJavascript } from "react-icons/io5";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJava,
  FaPython,
  FaGitAlt,
} from "react-icons/fa6";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
} from "react-icons/si";

const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="skills_container normalFont lg:px-[180px]"
      >
        <h2 className="fancyFont">Tools</h2>
        <div className="skills_containt space-y-16 lg:flex-row lg:space-y-0">
          <div className="styling front_end relative lg:mx-2 xl:mx-[32px]">
            <h4 className="">Front-end</h4>
            <FaHtml5 className="icon_style" />
            <FaCss3 className="icon_style" />
            <SiTailwindcss className="icon_style" />
            <IoLogoJavascript className="icon_style" />
            <FaReact className="icon_style" />
            <SiNextdotjs className="icon_style" />
          </div>

          <div className="styling back-end relative lg:mx-2 xl:mx-[32px]">
            <h4 className="">Back-end</h4>
            <SiFirebase className="icon_style" />
            <SiNextdotjs className="icon_style" />
            <SiNodedotjs className="icon_style" />
            <SiMongodb className="icon_style" />
            <SiMysql className="icon_style" />
          </div>

          <div className="styling dsa relative lg:mx-2 xl:mx-[32px]">
            <h4 className="">dsa & other</h4>
            <img src="/C-icon.png" alt="" width="34px" className="m-[18px]" />
            <FaJava className="icon_style" />
            <FaPython className="icon_style" />
            <FaGitAlt className="icon_style" />
            <img
              src="/Vscode-icon.png"
              alt=""
              width="34px"
              className="m-[18px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Skills;
