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
      description:
        "This is a news website project. The goal is to create a dynamic platform that easily brings together news articles from various global sources. The main focus is on quickly delivering these articles to users in an optimal and engaging way.",
    },
    {
      projNo: "02",
      projName: "Quiz Nest",
      imageURL: "projectImages/quizWeb.png",
      wrokingYear: "2023",
      description:
        "This is a dynamic Quiz web application with strong form validation. Users can participate in the quiz by logging in or signing up. The quiz includes a carefully selected set of questions, and users earn credit scores for correct answers. Your earned credit score is then displayed at the end of the quiz, showcasing your achievement. The platform seamlessly combines the interactive quiz experience with secure authentication mechanisms",
    },
    {
      projNo: "03",
      projName: "Study Sync",
      imageURL: "projectImages/studySync.png",
      wrokingYear: "2023-24",
      description: "",
    },
    {
      projNo: "04",
      projName: "Myntra Clone",
      imageURL: "projectImages/noImage.png",
      wrokingYear: "2022",
      description:
        "I have tried my best to clone the front-end part of the myntra landing-page with HMTL, CSS and JS only",
    },
    {
      projNo: "05",
      projName: "Bill Splitter",
      imageURL: "projectImages/noImage.png",
      wrokingYear: "2022",
      description:
        "It is a bill splitter which is a user-friendly web application designed to assist users in splitting bills among a group of individuals easily and efficiently. Utilizing HTML and CSS, this application provides a seamless and intuitive interface for users to input bill details, such as the total amount, number of individuals, and the items they are splitting. ",
    },
    {
      projNo: "06",
      projName: "Atifolio",
      imageURL: "projectImages/noImage.png",
      wrokingYear: "2024",
      description:
        "It's my personal portfolio designed and developed by me to showcase my skills and various projects that i have worked on since the beginning of this journey",
    },
  ];

  return (
    <>
      <section
        ref={props.projectsRef}
        id="projects"
        className="project-container normalFont lg:px-[140px] 3xl:px-[280px]"
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
                  year={e.wrokingYear}
                  description={e.description}
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
