import React, { useEffect } from "react";
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
  SiExpress
} from "react-icons/si";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skills = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".div-styling", { y: 100, opacity: 0 });
    gsap.to(".div-styling", {
      scrollTrigger: {
        trigger: ".div-styling",
        start: "top 100%",
        end: "bottom 90%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 1.5,
    });
  }, []);
  return (
    <>
      <section
        id="skills"
        className="skills-container normalFont  lg:px-[180px] 3xl:px-[280px]"
      >
        <h2 className="paraFont">Tools</h2>
        <div className="skills-div md:grid-cols-2 xl:grid-cols-3">
          <div className="div-styling front-end relative lg:mx-2 xl:mx-[32px]">
            <h4 className="">Front-end</h4>
            <FaHtml5 className="icon-style" />
            <FaCss3 className="icon-style" />
            <SiTailwindcss className="icon-style" />
            <IoLogoJavascript className="icon-style" />
            <FaReact className="icon-style" />
            <SiNextdotjs className="icon-style" />
          </div>

          <div className="div-styling back-end relative lg:mx-2 xl:mx-[32px]">
            <h4 className="">Back-end</h4>
            <SiFirebase className="icon-style" />
            <SiNextdotjs className="icon-style" />
            <SiNodedotjs className="icon-style" />
            <SiExpress className="icon-style" />
            <SiMongodb className="icon-style" />
            <SiMysql className="icon-style" />
          </div>

          <div className="div-styling dsa relative lg:mx-2 xl:mx-[32px]">
            <h4 className="">dsa & other</h4>
            <img src="/C-icon.png" alt="" width="34px" className="m-[18px]" />
            <FaJava className="icon-style" />
            <FaPython className="icon-style" />
            <FaGitAlt className="icon-style" />
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
