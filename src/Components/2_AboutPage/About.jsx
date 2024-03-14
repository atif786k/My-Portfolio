import React, { useEffect } from "react";
import "../2_AboutPage/About.css";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { Power4, Elastic } from "gsap";

const About = (props) => {
  useEffect(() => {
    const magneto = document.querySelector(".about_button");
    const magnetoText = document.querySelector(".about_button .about_btn-txt");

    const activeMagneto = (event) => {
      let boundBox = magneto.getBoundingClientRect();
      const magnetoStrength = 60;
      const magnetoTextStrength = 70;
      const newX = (event.clientX - boundBox.left) / magneto.offsetWidth - 0.5;
      const newY = (event.clientY - boundBox.top) / magneto.offsetHeight - 0.5;

      gsap.to(magneto, {
        duration: 1,
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,
        ease: Power4.easeOut,
      });
      gsap.to(magnetoText, {
        duration: 1,
        x: newX * magnetoTextStrength,
        y: newY * magnetoTextStrength,
        ease: Power4.easeOut,
      });
    };

    const resetMagneto = () => {
      gsap.to(magneto, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut,
      });
      gsap.to(magnetoText, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut,
      });
    };

    magneto.addEventListener("mousemove", activeMagneto);
    magneto.addEventListener("mouseleave", resetMagneto);

    return () => {
      magneto.removeEventListener("mousemove", activeMagneto);
      magneto.removeEventListener("mouseleave", resetMagneto);
    };
  }, []);
  return (
    <>
      <div
        ref={props.aboutRef}
        id="about"
        className="about_container normalFont md:flex-row md:justify-evenly md:mt-[140px] md:flex lg:px-[180px]"
      >
        <p className="about_para md:w-[60%]">
          Innovative Web Developer and Software Developer with proven abilities
          in frontend tools and Data Structures and Algorithms (DSA). Can work
          in collaborative environments while staying focused on achieving
          high-quality results under strict deadlines.
        </p>
        <Link to="/aboutdetailed" rel="">
          <button className="about_button about_type1">
            <span className="about_btn-txt fancyFont">About me</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default About;
