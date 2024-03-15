import React from "react";
import "../3_ProjectPage/Project.css";
import ProjectCard from "./ProjectCard";

const Project = (props) => {
  const ProjectDetails = [
    {
      projNo: "01",
      projName: "Project Name",
      imageURL: "./public/Laptop.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloribus recusandae quis saepe deserunt? Debitis magnam mollitia aliquid explicabo nesciunt?",
    },
    {
      projNo: "02",
      projName: "Project Name",
      imageURL: "/Laptop.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloribus recusandae quis saepe deserunt? Debitis magnam mollitia aliquid explicabo nesciunt?",
    },
    {
      projNo: "03",
      projName: "Project Name",
      imageURL: "/Laptop.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloribus recusandae quis saepe deserunt? Debitis magnam mollitia aliquid explicabo nesciunt?",
    },
    {
      projNo: "04",
      projName: "Project Name",
      imageURL: "/Laptop.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloribus recusandae quis saepe deserunt? Debitis magnam mollitia aliquid explicabo nesciunt?",
    },
    {
      projNo: "05",
      projName: "Project Name",
      imageURL: "/Laptop.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloribus recusandae quis saepe deserunt? Debitis magnam mollitia aliquid explicabo nesciunt?",
    },
    {
      projNo: "06",
      projName: "Project Name",
      imageURL: "/Laptop.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloribus recusandae quis saepe deserunt? Debitis magnam mollitia aliquid explicabo nesciunt?",
    },
  ];

  return (
    <>
      <section
        ref={props.projectsRef}
        id="projects"
        className="project-container normalFont lg:px-[140px]"
      >
        <h2 className="fancyFont">Projects</h2>
        <h3>latest ones</h3>
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {ProjectDetails.map((e) => {
            return (
              <div id="card-container" key={e.projNo}>
                <ProjectCard
                  image={e.imageURL}
                  name={e.projName}
                  description={e.description}
                />
              </div>
            );
          })}
        </div>
        <div className="w-[100%] flex justify-center">
          <button className="project-btn type1">
            <span className="project-btn-span">
              More Work <sup className="animate-pulse">8</sup>
            </span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Project;
