import React, { useEffect } from "react";
import "../3_ProjectPage/ProjectCard.css";
import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectCard = (props) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // gsap.from(".project-card1", {
    //   scale: 0,
    //   opacity: 0
    // })
    // gsap.to(".project-card1", {
    //   scrollTrigger: {
    //     trigger: ".project-card1",
    //     start: "top 85%",
    //     end: "bottom 40%",
    //     scrub: true,
    //     markers: true
    //   },
    //   scale: 1,
    //   opacity: 1,
    //   duration: 4,
    //   stagger: 0.2,
    //   ease: Power4.easeIn
    // });
  }, []);
  return (
    <>
      <div id="card1" className="project-card1">
        <figure id="card1" className="project-img-container">
          <a href={props.URL} target="_blank">
            <img src={props.image} alt="" />
          </a>
        </figure>
        <div className="project-title paraFont">
          <h1>{props.name}</h1>
          <h4>{props.year}</h4>
        </div>
        <div className="project-detailed-container paraFont">
          <h4>{props.techStacks}</h4>
        </div>
      </div>
    </>
  );
};
export default ProjectCard;
