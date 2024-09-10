import React, { useState, useRef, useEffect } from "react";
import "../1_HomePage/Home.css";
import { RiMenu4Fill } from "react-icons/ri";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import { BsArrowDownRight, BsCodeSlash } from "react-icons/bs";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoTwitter,
} from "react-icons/io5";

import About from "../2_AboutPage/About";
import Project from "../3_ProjectPage/Project";
import Skills from "../4_SkillesPage/Skills";
import Footer from "../5_FooterPage/Footer";
import MagnetoButton from "../Magneto";

import { gsap, Power0, Power4 } from "gsap";

const Home = () => {
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };
  const closeNav = () => {
    setNavOpen(false);
  };
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
    closeNav();
  };

  useEffect(() => {
    let tl = gsap.timeline({});
    tl.to(".nav-title", {
      translateY: 0,
      opacity: 1,
      duration: 1,
      ease: Power4.easeIn,
    });
    tl.to(".loading-container", {
      borderBottomLeftRadius: "50% 25%",
      borderBottomRightRadius: "50% 25%",
      translateY: "-100%",
      opacity: 1,
      duration: 1,
      ease: Power4.easeIn,
      delay: 0.6,
    });
    gsap.set(".marquee-name , .occupation-div", {
      y: 300,
      opacity: 0,
    });
    tl.to(".marquee-name , .occupation-div", {
      y: 0,
      opacity: 1,
      duration: 0.8,
    });
  }, []);

  return (
    <>
      <div id="side-navigation-container">
        <div className={`side-navigation ${isNavOpen ? "open" : ""} fancyFont`}>
          <div className="initials-div w-[100%]">
            <h4>
              <span
                onClick={() => scrollToSection(home)}
                className="flex items-center"
              >
                <BsCodeSlash className="mr-2" /> Atif
              </span>
            </h4>
            <MagnetoButton
              buttonClass="btn-circle"
              buttonClass1="btn-border"
              textClass="close-btn"
              buttonText={<IoClose onClick={closeNav} className="close-btn" />}
              x={25}
              y={35}
            />
          </div>

          <div className="menu-div w-[100%]">
            <ul className="menu-items space-y-4">
              <hr className="horizontal-line" />
              <li onClick={() => scrollToSection(home)}>Home</li>
              <li onClick={() => scrollToSection(about)}>About</li>
              <li onClick={() => scrollToSection(projects)}>Projects</li>
              <li onClick={() => scrollToSection(contact)}>Contact</li>
            </ul>
          </div>

          <div className="socialMedia-div space-y-3 w-[100%]">
            <hr className="horizontal-line" />
            <h5 className="normalFont">social</h5>
            <ul className="space-x-4">
              <li>
                <a href="https://github.com/atif786k" target="_blank">
                  <IoLogoGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mohammad-atif-a14b04205/"
                  target="_blank"
                >
                  <IoLogoLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/_mohd.atif__/?hl=en"
                  target="_blank"
                >
                  <IoLogoInstagram />
                </a>
              </li>

              <li>
                <a href="https://www.facebook.com/moh.atif.927" target="_blank">
                  <IoLogoFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/moh.atif.927" target="_blank">
                  <IoLogoTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section
        ref={home}
        id="home"
        className="home-container normalFont md:bg-contain lg:px-[140px] 3xl:px-[280px]"
      >
        <div className="loading-container">
          <h3 className="urdu-text">عسسلم عليكم</h3>
          <h2 className="bg-text">Hello</h2>
          <h2 className="text-screen">
            <h2 className="nav-title">
              <span></span>Home
            </h2>
          </h2>
        </div>

        <nav className="home-container-nav">
          <h4>
            <span className="flex items-center">
              <BsCodeSlash className="mr-2" />
              Atif
            </span>
          </h4>
          <ul className="hidden space-x-6 md:flex">
            <li onClick={() => scrollToSection(about)}>
              <MagnetoButton
                buttonClass="about-btn-fakeClassName"
                buttonClass1="about_type1-fakeClassName"
                textClass="about-btn-span-fakeClassName"
                buttonText={
                  <>
                    About <p className="dot-animation"></p>
                  </>
                }
                x={35}
                y={45}
              />
            </li>
            <li onClick={() => scrollToSection(projects)}>
              <MagnetoButton
                buttonClass="projects-btn-fakeClassName"
                buttonClass1="projects_type1-fakeClassName"
                textClass="projects-btn-span-fakeClassName"
                buttonText={
                  <>
                    Projects <p className="dot-animation"></p>
                  </>
                }
                x={35}
                y={45}
              />
            </li>
            <li onClick={() => scrollToSection(contact)}>
              <MagnetoButton
                buttonClass="contact-btn-fakeClassName"
                buttonClass1="contact_type1-fakeClassName"
                textClass="contact-btn-span-fakeClassName"
                buttonText={
                  <>
                    Contact <p className="dot-animation"></p>
                  </>
                }
                x={35}
                y={45}
              />
            </li>
          </ul>
          <MagnetoButton
            buttonClass="btnCircle"
            buttonClass1="btnMenuFixed"
            textClass="menuBtn"
            buttonText={
              <div className="btn-circle btn-menu-fixed md:hidden">
                <RiMenu4Fill onClick={toggleNav} className="menu-btn" />
              </div>
            }
            x={25}
            y={35}
          />
        </nav>

        <div className="absolute bottom-8 lg:static">
          <div className="greetings-div lg:absolute">
            <h3 className="text-[32px] xl:text-[44px]">Hey, Guys</h3>
            <div className="marquee-name flex">
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

          <div className="occupation-div lg:absolute xl:right-[12%]">
            <BsArrowDownRight className="text-3xl mb-4" />
            <div className="occupation-div-containt">
              <button className="resume-btn">
                <a
                  href="https://drive.google.com/file/d/1UiY75L3ARJxQci2hi5qPyzdGNEE-DSa3/view?usp=drive_link"
                  target="_blank"
                >
                  Resume
                </a>
              </button>
              <h2>Designer & Developer</h2>
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
