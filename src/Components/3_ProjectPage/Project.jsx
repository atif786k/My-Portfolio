import React, { useEffect } from "react";
import "../3_ProjectPage/Project.css";
import ProjectCard from "./ProjectCard";
import MagnetoButton from "../Magneto";
import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Project = (props) => {
  const ProjectDetails = [
    {
      projNo: "01",
      projName: "Earth 3D Model",
      imageURL: "projectImages/earth3D.png",
      wrokingYear: "2024",
      url: "https://earth-3d-model-five.vercel.app/",
      techStack: "JavaScript, Three.js",
    },
    {
      projNo: "02",
      projName: "Store Pad",
      imageURL: "projectImages/storePad1.png",
      wrokingYear: "2024",
      url: "",
      techStack: "MongoDB, ExpressJS, React, NodeJS, PassportJS",
    },
    {
      projNo: "03",
      projName: "Study Sync",
      imageURL: "projectImages/studySync1.png",
      wrokingYear: "2023-24",
      url: "https://atifolio.netlify.app/",
      techStack: "BotPress Studio, Firebase, React, Tailwindcss",
    },
    {
      projNo: "04",
      projName: "Fresh Feeds",
      imageURL: "projectImages/freshFeeds.png",
      wrokingYear: "2023",
      url: "https://fresh-feeds.netlify.app/",
      techStack: "React, Tailwindcss, API-Integration",
    },
    {
      projNo: "05",
      projName: "Quiz Nest",
      imageURL: "projectImages/quizWeb1.png",
      wrokingYear: "2023",
      url: "https://quiz-nest.netlify.app",
      techStack: "Firebase Authentication, React, JavaScript",
    },
    {
      projNo: "06",
      projName: "Myntra Clone",
      imageURL: "projectImages/myntraClone1.png",
      wrokingYear: "2022",
      url: "https://myntra-clone-swart.vercel.app/",
      techStack: "HTML5, CSS, JavaScript",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // gsap.set("#card-container", { scale: 0.75, opacity: 0 });
    gsap.to("#card-container", {
      scrollTrigger: {
        trigger: "#card-container",
        start: "top 70%",
        end: "top 75%",
        // start: "top 100%",
        // end: "bottom 40%",
        scrub: true,
      },
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: Power4.easeIn,
    });
  }, []);

  return (
    <>
      <section
        ref={props.projectsRef}
        id="projects"
        className="project-container normalFont lg:px-[90px] 3xl:px-[200px]"
      >
        <h2 className="paraFont">Projects</h2>
        <h3>latest ones</h3>
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols- gap-5">
          {ProjectDetails.map((e) => {
            return (
              <div id="card-container" key={e.projNo}>
                <ProjectCard
                  image={e.imageURL}
                  name={e.projName}
                  year={e.wrokingYear}
                  URL={e.url}
                  techStacks={e.techStack}
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
