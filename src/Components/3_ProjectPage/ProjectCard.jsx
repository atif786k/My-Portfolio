import React, { useEffect } from "react";
import "../3_ProjectPage/ProjectCard.css";

const ProjectCard = (props) => {
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
