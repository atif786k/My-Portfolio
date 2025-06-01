import React, { useEffect } from "react";
import "../2_AboutPage/About.css";
import { Link } from "react-router-dom";
import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagnetoButton from "../Magneto";

const About = (props) => {
  // useEffect(() => {
  //   const magneto = document.querySelector(".about-btn");
  //   const magnetoText = document.querySelector(".about-btn .about-btn-span");

  //   const activeMagneto = (event) => {
  //     let boundBox = magneto.getBoundingClientRect();
  //     const magnetoStrength = 60;
  //     const magnetoTextStrength = 70;
  //     const newX = (event.clientX - boundBox.left) / magneto.offsetWidth - 0.5;
  //     const newY = (event.clientY - boundBox.top) / magneto.offsetHeight - 0.5;

  //     gsap.to(magneto, {
  //       duration: 1,
  //       x: newX * magnetoStrength,
  //       y: newY * magnetoStrength,
  //       ease: Power4.easeOut,
  //     });
  //     gsap.to(magnetoText, {
  //       duration: 1,
  //       x: newX * magnetoTextStrength,
  //       y: newY * magnetoTextStrength,
  //       ease: Power4.easeOut,
  //     });
  //   };

  //   const resetMagneto = () => {
  //     gsap.to(magneto, {
  //       duration: 1,
  //       x: 0,
  //       y: 0,
  //       ease: Elastic.easeOut,
  //     });
  //     gsap.to(magnetoText, {
  //       duration: 1,
  //       x: 0,
  //       y: 0,
  //       ease: Elastic.easeOut,
  //     });
  //   };

  //   magneto.addEventListener("mousemove", activeMagneto);
  //   magneto.addEventListener("mouseleave", resetMagneto);

  //   return () => {
  //     magneto.removeEventListener("mousemove", activeMagneto);
  //     magneto.removeEventListener("mouseleave", resetMagneto);
  //   };
  // }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".about-phrase", { y: 150, opacity: 0 });
    gsap.to(".about-phrase", {
      scrollTrigger: {
        trigger: ".about-phrase",
        start: "top 100%",
        end: "bottom 40%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: Power4.easeOut,
    });
  }, []);

  return (
    <>
      <div
        ref={props.aboutRef}
        id="about"
        className="about-container fancyFont md:flex-row md:justify-evenly md:mt-[140px] md:flex lg:px-[180px] 3xl:px-[280px]"
      >
        <p className="about-phrase paraFont md:w-[60%]">
          Full Stack Developer with expertise in Node, MongoDB / MySQL and
          Express.js. Experienced in building secure RESTful APIs, JWT
          authentication, RBAC model and advanced caching. Skilled in creating
          responsive UI components with React.js and Tailwind CSS, writing unit
          tests with JEST, and deploying on Vercel / Netlify.
        </p>
        <Link to="/aboutdetailed" rel="" className="paraFont">
          <MagnetoButton
            buttonClass="about-btn"
            buttonClass1="about_type1"
            textClass="about-btn-span"
            buttonText="About me"
            x={60}
            y={70}
          />
        </Link>
      </div>
    </>
  );
};

export default About;
