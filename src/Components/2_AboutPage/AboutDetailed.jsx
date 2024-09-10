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

    gsap.set(".arrow", { rotate: 0 });
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
    gsap.set(".section-info div", { y: 100, opacity: 0 });
    gsap.to(".section-info div", {
      scrollTrigger: {
        trigger: ".section-info div",
        start: "top 70%",
        end: "top 40%",
        scrub: 1,
      },
      y: 0,
      opacity: 1,
      duration: 4,
      ease: Power4.easeIn,
    });

    let tl = gsap.timeline({});
    tl.to(".nav-title", {
      translateY: 0,
      opacity: 1,
      duration: 1,
      ease: Power4.easeIn,
    });
    tl.to(".loading-container", {
      borderBottomLeftRadius: "50% 25%",
      borderBottomRightRadius: "50% 25%",
      translateY: "-100%",
      opacity: 1,
      duration: 1,
      ease: Power4.easeIn,
      delay: 0.6,
    });
    gsap.set(".detailed-section", {
      y: 300,
      opacity: 0,
    });
    tl.to(".detailed-section", {
      y: 0,
      opacity: 1,
      duration: 1,
    });
    gsap.set(".occupation-heading h1", {
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
        <div className="loading-container">
          <h3 className="urdu-text">عسسلم عليكم</h3>
          <h2 className="bg-text">Hello</h2>
          <h2 className="text-screen">
            <h2 className="nav-title">
              <span></span>About
            </h2>
          </h2>
        </div>

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
          <div className="detailed-section-first lg:w-[50%] lg:pr-10">
            <BsArrowRight className="arrow text-3xl mb-4" />

            <p>
              <span className="high normalFont">Hi, I'm Mohammad Atif 🧑‍💻</span>A
              passionate software developer and a web developer. I have build
              this portfolio to showcase my projects & skills and to show how
              passionate i am towards developing things.
            </p>
            <p>
              I hold a Btech degree in CSE from Integral University Lucknow. In
              past 4 years :
              <li>
                i have crafted responsive, dynamic websites and user interfaces
                that offer seamless user experiences.
              </li>
              <li>
                Built robust backend systems ensuring high performance and
                scalability.
              </li>
              <li>
                Proficient in various data structures and algorithms, optimizing
                code for efficiency. Successfully solved complex problems,
                improving application performance and resource management.
              </li>
              <br />
              Since then, I've been on an exciting adventure of continuous
              learning and growth.
            </p>
            <p>
              I'm always open to new opportunities, collaborations, and
              discussions about all things tech. Feel free to reach out me
              through my Contact section. 🤝
            </p>
            <p>📫 Let's build something cool & amazing !</p>
          </div>

          <div className="detailed-section-second mt-10 lg:mt-0 lg:w-[50%]">
            <img src="./myPhotos/IMG_1211.png" alt="" />
          </div>
        </div>

        <div className="section-info paraFont space-y-12 3xl:px-[280px]">
          <div className="myEducation-section">
            <h2>Qualifications</h2>
            <h4 className="bg-num">O1</h4>
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
                Recently i have completed my Bachelors degree in Btech Computer
                Science & Engineering from Integral University Lucknow, India
                <span>Duration : 2020 - 2024</span>
                <span>CGPA : 8.2</span>
              </p>
            </div>
          </div>

          <div className="myServices-section">
            <h2>How can i help you ...</h2>
            <h4 className="bg-num">O2</h4>

            <div className="same-style space-y-8 lg:space-x-8 lg:space-y-0 lg:flex-row">
              <p>
                <hr className="horizontal-line my-6" />
                <h3>Design ✨</h3>I specialize in developing visually striking
                and user-friendly web applications.My approach is centered on
                understanding your unique goals and translating them into a
                compelling design.
              </p>
              <p>
                <hr className="horizontal-line my-6" />
                <h3>Development ✨</h3>I provide comprehensive web development
                services tailored to bring your digital vision to life.
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
