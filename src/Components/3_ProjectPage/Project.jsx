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
      imageURL: "projectImages/storePad2.png",
      wrokingYear: "2024",
      url: "https://store-pad.vercel.app/",
      techStack: "MongoDB, React, NodeJS, PassportJS, Cron (Auto-delete Notes)",
    },
    {
      projNo: "03",
      projName: "Study Sync",
      imageURL: "projectImages/studySync1.png",
      wrokingYear: "2023-24",
      url: "https://studey-sync.netlify.app/",
      techStack: "Chat Bot, Firebase Auth, React, Tailwindcss",
    },
    {
      projNo: "04",
      projName: "People.Co",
      imageURL: "projectImages/peopleCo.png",
      wrokingYear: "2024",
      url: "https://edunova-assis.vercel.app/",
      techStack: "Tanstack, Zod, React, Tailwindcss",
    },
    {
      projNo: "05",
      projName: "AI Planet",
      imageURL: "projectImages/aiPlanet.png",
      wrokingYear: "2024",
      url: "https://ai-planet-assis.vercel.app/",
      techStack: "JavaScript, React, Tailwindcss",
    },
    {
      projNo: "06",
      projName: "Fresh Feeds",
      imageURL: "projectImages/freshFeeds.png",
      wrokingYear: "2023",
      url: "https://fresh-feeds.netlify.app/",
      techStack: "React, Tailwindcss, API-Integration",
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
                More Work <sup className="animate-pulse">10+</sup>
              </>
            }
            x={25}
            y={35}
            onClick={() =>
              window.open(
                "https://github.com/atif786k?tab=repositories",
                "_blank"
              )
            }
          />
        </div>
      </section>
    </>
  );
};

export default Project;
