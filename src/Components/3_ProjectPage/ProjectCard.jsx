import React from "react";
import "../3_ProjectPage/ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <>
      <section id="card1" className="card normalFont">
        <img src={props.image} alt="" />
        <div className="card__content">
          <p className="card__title">{props.name}</p>
          <p className="card__description">{props.description}</p>
        </div>
      </section>
      <h1 className="project_heading">Project Name</h1>
      <hr />
      <h2 className="view_duration">
        <span className="view_btn">View</span>
        <span>2024</span>
      </h2>
    </>
  );
};
export default ProjectCard;
