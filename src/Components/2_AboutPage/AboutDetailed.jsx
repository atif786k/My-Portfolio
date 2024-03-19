import React, { useRef, useEffect } from "react";
import "../1_HomePage/Home.css";
import "./About.css";
import { BsStars, BsCodeSlash, BsArrowRight } from "react-icons/bs";
import Footer from "../5_FooterPage/Footer";
import { Link } from "react-router-dom";
import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagnetoButton from "../Magneto";

const AboutDetailed = () => {
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".arrow", { rotate: 0 });
    gsap.to(".arrow", {
      scrollTrigger: {
        trigger: ".arrow",
        start: "top 70%",
        end: "top 50%",
        scrub: 2,
      },
      rotate: 45,
      duration: 2,
    });
    gsap.from(".section-info div", { y: 100, opacity: 0 });
    gsap.to(".section-info div", {
      scrollTrigger: {
        trigger: ".section-info div",
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
        // markers: true,
      },
      y: 0,
      opacity: 1,
      duration: 4,
      ease: Power4.easeIn,
    });

    let tl = gsap.timeline({});
    gsap.from(".aboutDetailed-nav", {
      y: -200,
      opacity: 0,
    });
    tl.to(".aboutDetailed-nav", {
      y: 0,
      opacity: 1,
      duration: 1.5,
    });
    gsap.from(".detailed-section", {
      y: 300,
      opacity: 0,
    });
    tl.to(".detailed-section", {
      y: 0,
      opacity: 1,
      duration: 1,
    });
    gsap.from(".occupation-heading h1", {
      x: -500,
      opacity: 0,
    });
    tl.to(".occupation-heading h1", {
      x: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.8,
    });
  }, []);

  return (
    <>
      <div className="normalFont aboutDetailed-container">
        <nav className="aboutDetailed-nav lg:px-[180px] 3xl:px-[280px]">
          <h4>
            <span className="flex items-center">
              <BsCodeSlash className="menu_icon mr-1" />
              Atif
            </span>
          </h4>
          <ul className="space-x-6 flex">
            <Link to="/" rel="">
              <li>
                <MagnetoButton
                  buttonClass="home-btn-fakeClassName"
                  buttonClass1="home_type1-fakeClassName"
                  textClass="home-btn-span-fakeClassName"
                  buttonText={
                    <>
                      Home <p className="dot-animation bg-color"></p>
                    </>
                  }
                  x={35}
                  y={45}
                />
              </li>
            </Link>
            <li onClick={() => scrollToSection(contact)}>
              <MagnetoButton
                buttonClass="contact-btn-fakeClassName"
                buttonClass1="contact_type1-fakeClassName"
                textClass="contact-btn-span-fakeClassName"
                buttonText={
                  <>
                    Contact <p className="dot-animation bg-color"></p>
                  </>
                }
                x={35}
                y={45}
              />
            </li>
          </ul>
        </nav>

        <div className="detailed-info lg:px-[180px] 3xl:px-[280px]">
          <p className="occupation-heading">
            <h1 className="heading-one">Designer</h1>
            <h1 className="heading-two">and</h1>
            <h1 className="heading-three">Developer</h1>
          </p>
        </div>

        <hr className="horizontal-line lg:mx-[180px]" />

        <div className="detailed-section paraFont lg:flex-row  lg:px-[180px] 3xl:px-[280px]">
          <div className="detailed-section-first space-y-8 lg:w-[50%] lg:pr-10">
            <BsArrowRight className="arrow text-3xl mb-4" />

            <p>
              <span className="high">Welcome to my portfolio</span>
              Myself Mohammad Atif a passionate software developer and a web
              developer with a love for crafting innovative solutions. I thrive
              on turning complex problems into simple, elegant, and intuitive
              software. I have build this portfolio to showcase my projects &
              skills and to show how passionate i am towards developing things.
            </p>
            <p>
              <span className="mid">My journey</span>I hold a Btech degree in
              Computer Science and Engineering from Integral University Lucknow.
              My journey into the world of programming started during the
              lockdown period when whole world is busy in fighting with corona
              virus and here I started developing feelings for coding and
              developing stuffs during that time. Since then, I've been on an
              exciting adventure of continuous learning and growth.
            </p>
            <p>
              <span className="mid">Wanna collab...!</span>
              I'm always open to new opportunities, collaborations, and
              discussions about all things tech. Feel free to reach out me
              through my Contact section if you'd like to chat about software
              development, share ideas, or explore potential projects together.
            </p>
            <p>Let's build something cool & amazing !</p>
          </div>

          <div className="detailed-section-second mt-10 lg:mt-0 lg:w-[50%]">
            <img src="./myPhotos/img5.jpg" alt="" />
          </div>
        </div>

        <div className="section-info paraFont space-y-12 3xl:px-[280px]">
          <div className="myEducation-section ">
            <h2>Qualifications</h2>
            <div className="same-style space-y-8 lg:space-x-8 lg:space-y-0  lg:flex-row">
              <p>
                <hr className="horizontal-line my-6" />
                <h3>Schooling</h3>I have completed my schooling from St John's
                Sr Sec School Firozabad, India
                <span>Duration : 2005 - 2020</span>
              </p>
              <p>
                <hr className="horizontal-line my-6" />
                <h3>Graduation</h3>
                Currently I'm pursuing Btech in Computer Science & Engineering
                from Integral University Lucknow, India
                <span>Duration : 2020 - 2024</span>
                <span>CGPA : 8.4</span>
              </p>
            </div>
          </div>

          <div className="myServices-section">
            <h2>How can i help you ...</h2>
            <div className="same-style space-y-8 lg:space-x-8 lg:space-y-0 lg:flex-row">
              <p>
                <hr className="horizontal-line my-6" />
                <h3>
                  Design <BsStars className="ml-5" />
                </h3>
                I specialize in developing visually striking and user-friendly
                web applications.My approach is centered on understanding your
                unique goals and translating them into a compelling design.
              </p>
              <p>
                <hr className="horizontal-line my-6" />
                <h3>
                  Development <BsStars className="ml-5" />
                </h3>
                I provide comprehensive web development services tailored to
                bring your digital vision to life.
              </p>
            </div>
          </div>
        </div>
        <Footer contactRef={contact} />
      </div>
    </>
  );
};
export default AboutDetailed;
