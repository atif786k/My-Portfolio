import React, { useEffect } from "react";
import "../3_ProjectPage/ProjectCard.css";
import { FaPlay } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectCard = (props) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#card1", {
      scrollTrigger: {
        trigger: "#card1",
        start: "top 85%",
        end: "bottom 60%",
        scrub: true,
      },
      scale: 1,
      opacity: 1,
      duration: 1.5,
    });
  }, []);
  return (
    <>
      <section className="project-card">
        <div id="card1" className="card normalFont">
          <img src={props.image} alt="" />
          <div className="card-content">
            <p className="card-title">{props.name}</p>
            <p className="card-description">{props.description}</p>
          </div>
        </div>
        <h1 className="projects-heading">{props.name}</h1>
        <hr className="horizontal-line" />
        <h2 className="view-duration">
          <span className="view-btn">
            <FaPlay />
          </span>
          <span>{props.year}</span>
        </h2>
      </section>
    </>
  );
};
export default ProjectCard;
