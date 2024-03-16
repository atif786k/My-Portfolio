import React, { useRef } from "react";
import "../1_HomePage/Home.css";
import "./About.css";
import { BsStars, BsCodeSlash } from "react-icons/bs";
import Footer from "../5_FooterPage/Footer";
import { Link } from "react-router-dom";

const AboutDetailed = () => {
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="normalFont aboutDetailed-container lg:px-[180px]">
        <nav className="aboutDetailed-nav">
          <h4>
            <span className="flex items-center">
              <BsCodeSlash className="menu_icon mr-1" />
              Atif
            </span>
          </h4>
          <ul className="space-x-6 flex">
            <Link to="/" rel="">
              <li>
                Home
                <p className="dot-animation bg-color"></p>
              </li>
            </Link>
            <li onClick={() => scrollToSection(contact)}>
              Contact<p className="dot-animation bg-color"></p>
            </li>
          </ul>
        </nav>

        <div className="Detailed-info">
          <p className="occupation-heading">
            <h1 className="">Designer</h1>
            <h1 className="">and</h1>
            <h1 className="">Developer</h1>
          </p>

          <hr className="horizontal-line" />

          <div className="detailed-section lg:flex-row">
            <div className="detailed-section-first space-y-8 lg:w-[50%] lg:pr-10">
              <p>
                Hey there ! 👋 I'm Mohammad Atif, a passionate software
                developer and a web developer with a love for crafting
                innovative solutions. I thrive on turning complex problems into
                simple, elegant, and intuitive software. Here's a bit about me
                ...
              </p>
              <p>
                I hold a Btech degree in Computer Science and Engineering from
                Integral University Lucknow. My journey into the world of
                programming started during the lockdown period when whole world
                is busy in fighting with corona virus and here I started
                developing feelings for coding and developing stuffs during that
                time. Since then, I've been on an exciting adventure of
                continuous learning and growth.
              </p>
              <p>
                I'm always open to new opportunities, collaborations, and
                discussions about all things tech. Feel free to reach out me
                through my Contact section if you'd like to chat about software
                development, share ideas, or explore potential projects
                together.
              </p>
              <p>Let's build something cool & amazing !</p>
            </div>

            <div className="detailed-section-second mt-10 lg:mt-0 lg:w-[50%]">
              <img src="./bg_remove/img5.jpg" alt="" />
            </div>
          </div>

          <div className="myEducation-section ">
            <h2>Qualifications</h2>
            <hr className="horizontal-line" />
            <div className="same-style space-y-8 lg:space-x-8 lg:space-y-0  lg:flex-row">
              <p>
                <h3>Schooling</h3>I have completed my schooling from St John's
                Sr Sec School Firozabad, India
                <span>Duration : 2005 - 2020</span>
              </p>
              <p>
                <h3>Graduation</h3>
                Currently I'm pursuing Btech in Computer Science & Engineering
                from Integral University Lucknow, India
                <span>CGPA : 8.4</span>
                <span>Duration : 2020 - 2024</span>
              </p>
            </div>
          </div>

          <div className="myServices-section my-12">
            <h2>How can i help you ...</h2>
            <hr className="horizontal-line" />
            <div className="same-style space-y-8 lg:space-x-8 lg:space-y-0 lg:flex-row">
              <p>
                <h3>
                  Design <BsStars className="ml-5" />
                </h3>
                I specialize in developing visually striking and user-friendly
                web applications.My approach is centered on understanding your
                unique goals and translating them into a compelling design.
              </p>
              <p>
                <h3>
                  Development <BsStars className="ml-5" />
                </h3>
                I provide comprehensive web development services tailored to
                bring your digital vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer contactRef={contact} />
    </>
  );
};
export default AboutDetailed;
