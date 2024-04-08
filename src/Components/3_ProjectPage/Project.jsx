import React from "react";
import "../3_ProjectPage/Project.css";
import ProjectCard from "./ProjectCard";
import MagnetoButton from "../Magneto";

const Project = (props) => {
  const ProjectDetails = [
    {
      projNo: "01",
      projName: "Fresh Feeds",
      imageURL: "projectImages/freshFeeds.png",
      wrokingYear: "2023",
      url:"https://fresh-feeds.netlify.app/",
      service:"Designed & Developed"
    },
    {
      projNo: "02",
      projName: "Quiz Nest",
      imageURL: "projectImages/quizWeb.png",
      wrokingYear: "2023",
      url:"",
      service:"Designed & Developed"
    },
    {
      projNo: "03",
      projName: "Study Sync",
      imageURL: "projectImages/studySync.png",
      wrokingYear: "2023-24",
      url:"https://atifolio.netlify.app/",
      service:"Designed & Developed"
    },
    {
      projNo: "04",
      projName: "Myntra Clone",
      imageURL: "projectImages/myntraClone.png",
      wrokingYear: "2022",
      url:"https://myntra-page.netlify.app/",
      service:"Developed"
    },
    {
      projNo: "05",
      projName: "Bill Splitter",
      imageURL: "projectImages/noImage.png",
      wrokingYear: "2022",
      url:"",
      service:"Developed"
    },
    {
      projNo: "06",
      projName: "Atifolio",
      imageURL: "projectImages/folio1.png",
      wrokingYear: "2024",
      url:"https://atifolio.netlify.app/",
      service:"Designed & Developed"
    },
  ];

  return (
    <>
      <section
        ref={props.projectsRef}
        id="projects"
        className="project-container normalFont lg:px-[90px] 3xl:px-[200px]"
      >
        <h2 className="fancyFont">Projects</h2>
        <h3>latest ones</h3>
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {ProjectDetails.map((e) => {
            return (
              <div id="card-container" key={e.projNo}>
                <ProjectCard
                  image={e.imageURL}
                  name={e.projName}
                  year={e.wrokingYear}
                  URL={e.url}
                  services={e.service}
                />
              </div>
            );
          })}
        </div>
        <div className="w-[100%] flex justify-center">
          <MagnetoButton
            buttonClass="project-btn"
            buttonClass1="type1"
            textClass="project-btn-span"
            buttonText={
              <>
                More Work <sup className="animate-pulse">8</sup>
              </>
            }
            x={25}
            y={35}
          />
        </div>
      </section>
    </>
  );
};

export default Project;
