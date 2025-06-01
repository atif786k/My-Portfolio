import React from "react";
import "../5_FooterPage/Footer.css";
import { FaRegCopyright } from "react-icons/fa6";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoTwitter,
} from "react-icons/io5";
import MagnetoButton from "../Magneto";

const Footer = (props) => {
  return (
    <>
      <div className="big-heading md:px-[28px]">
        <div className="heading-containt fancyFont lg:flex-row lg:justify-center lg:space-x-8 lg:text-[130px] 3xl:text-[148px]">
          <span className="span-one">let's</span>
          <span className="span-two">code</span>
          <span className="span-three">together</span>
        </div>
      </div>

      <section
        ref={props.contactRef}
        id="contact"
        className="footer-container normalFont lg:px-[180px] 3xl:px-[280px]"
      >
        <div className="footer-first-div md:mx-4 md:flex justify-between">
          <div className="footer-heading lg:text-[70px]">
            <h1>Get</h1>
            <h1>in</h1>
            <h1>Touch</h1>
          </div>

          <div className="flex flex-col md:w-[400px] lg:w-[500px]">
            <div className="footer-buttons">
              <MagnetoButton
                buttonClass="contact-btn-1"
                buttonClass1="contact-type1"
                textClass="contact-btn-span-1"
                buttonText={
                  <a href="mailto:matif91201@gmail.com" target="_blank">
                    matif91201@gmail.com
                  </a>
                }
                x={25}
                y={35}
              />

              <MagnetoButton
                buttonClass="contact-btn-2"
                buttonClass1="contact-type2"
                textClass="contact-btn-span-2"
                buttonText="IND +91 7727075499"
                x={25}
                y={35}
              />
            </div>

            <div className="footer-socialMedia">
              <ul className="space-x-6">
                <li>
                  <a
                    href="https://github.com/atif786k"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visit my GitHub"
                    aria-label="GitHub"
                  >
                    <IoLogoGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/mohammad-atif-a14b04205/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visit my LinkedIn"
                    aria-label="LinkedIn"
                  >
                    <IoLogoLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/_mohd.atif__/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visit my Instagram"
                    aria-label="Instagram"
                  >
                    <IoLogoInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/moh.atif.927"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visit my Facebook"
                    aria-label="Facebook"
                  >
                    <IoLogoFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visit my Twitter"
                    aria-label="Twitter"
                  >
                    <IoLogoTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-[#808080]" />

        <div className="footer-second-div">
          <span className="flex items-center">
            <FaRegCopyright className="mr-2" /> Copyright
          </span>
          <span>Code by Atif</span>
        </div>
      </section>
    </>
  );
};
export default Footer;
