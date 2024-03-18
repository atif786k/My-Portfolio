import React, { useEffect } from "react";
import "../3_ProjectPage/ProjectCard.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectCard = (props) => {
  const tl = gsap.timeline({});
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#card1", { scale: 0.8, opacity: 0 });
    tl.to("#card1", {
      scrollTrigger: {
        trigger: "#card1",
        start: "top 85%",
        end: "bottom 60%",
        scrub: 1,
      },
      scale: 1,
      opacity: 1,
      duration: 1.5,
    });
  }, [".#card1", { scale: 0.8, opacity: 0 }]);
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
        <h1 className="projects-heading">Project Name</h1>
        <hr className="horizontal-line" />
        <h2 className="view-duration">
          <span className="view-btn">view</span>
          <span>2024</span>
        </h2>
      </section>
    </>
  );
};
export default ProjectCard;
