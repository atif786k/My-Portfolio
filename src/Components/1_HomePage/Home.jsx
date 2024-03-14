import React, { useState, useRef } from "react";
import "../1_HomePage/Home.css";
import { BiLogoGmail } from "react-icons/bi";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import { BsCodeSlash } from "@react-icons/all-files/bs/BsCodeSlash";
import { RiMenu4Fill } from "@react-icons/all-files/ri/RiMenu4Fill";
import { GiBottomRight3DArrow } from "@react-icons/all-files/gi/GiBottomRight3DArrow";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGithub,
} from "react-icons/io5";

import About from "../2_AboutPage/About";
import Project from "../3_ProjectPage/Project";
import Skills from "../4_SkillesPage/Skills";
import Footer from "../5_FooterPage/Footer";

const Home = () => {
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  // const skills=useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };
  const closeNav = () => {
    setNavOpen(false);
  };
  return (
    <>
      <div id="side_navigation_mainContainer">
        <div className={`side_navigation ${isNavOpen ? "open" : ""} fancyFont`}>
          <div className="1 flex items-center justify-between w-[100%]">
            <h4>
              <span
                onClick={() => scrollToSection(home)}
                className="flex items-center"
              >
                <BsCodeSlash className="mr-1" /> Atif
              </span>
            </h4>
            <div className="close_btn_border">
              <IoClose onClick={closeNav} className="close_btn" />
            </div>
          </div>

          <div className="2 w-[100%]">
            <ul className="list_items space-y-4">
              <hr />
              <li onClick={() => scrollToSection(home)}>Home</li>
              <li onClick={() => scrollToSection(about)}>About</li>
              <li onClick={() => scrollToSection(projects)}>Projects</li>
              <li onClick={() => scrollToSection(contact)}>Contact</li>
            </ul>
          </div>

          <div className="social_media space-y-3 w-[100%]">
            <hr />
            <h5>social</h5>
            <ul className="space-x-4">
              <li>
                <IoLogoLinkedin />
              </li>
              <li>
                <IoLogoInstagram />
              </li>
              <li>
                <IoLogoGithub />
              </li>
              <li>
                <IoLogoFacebook />
              </li>
              <li>
                <BiLogoGmail />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section
        ref={home}
        id="home"
        className="sect_1 normalFont md:bg-contain lg:px-[140px]"
      >
        <nav className="sect_1_nav">
          <h4>
            <span className="flex items-center">
              <BsCodeSlash className="menu_icon mr-1" />
              Atif
            </span>
          </h4>
          <ul className="hidden space-x-6 md:flex">
            <li onClick={() => scrollToSection(about)}>
              About
              <p className="hover_dot_animation"></p>
            </li>
            <li onClick={() => scrollToSection(projects)}>
              Projects<p className="hover_dot_animation"></p>
            </li>
            <li onClick={() => scrollToSection(contact)}>
              Contact<p className="hover_dot_animation"></p>
            </li>
          </ul>
          <p
            onClick={toggleNav}
            className="menu_circle flex items-center justify-center md:hidden"
          >
            <RiMenu4Fill className="" />
          </p>
        </nav>

        <div className="absolute bottom-0 lg:static">
          <div className="bottom_name lg:absolute">
            <h3 className="text-[32px] xl:text-[44px]">Hey, There !</h3>
            <div className="marquee_name flex">
              <h1 className="text-[120px] md:text-[180px]">
                I'm Mohammad Atif -
              </h1>
              <h1 className="text-[120px] md:text-[180px]">
                - I'm Mohammad Atif -
              </h1>
              <h1 className="text-[120px] md:text-[180px]">
                - I'm Mohammad Atif
              </h1>
            </div>
          </div>

          <div className="left_side lg:absolute xl:right-[12%]">
            <GiBottomRight3DArrow className="text-3xl mb-4" />
            <div className="containt">
              <h2>Designer & Developer</h2>

              <button className="resume_btn">Resume</button>
            </div>
          </div>
        </div>
      </section>
      <About aboutRef={about} />
      <Project projectsRef={projects} />
      <Skills />
      <Footer contactRef={contact} />
    </>
  );
};
export default Home;
