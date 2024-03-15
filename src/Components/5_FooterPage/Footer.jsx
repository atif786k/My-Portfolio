import React from "react";
import "../5_FooterPage/Footer.css";
import { BiLogoGmail } from "react-icons/bi";
import { FaRegCopyright } from "react-icons/fa6";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoTwitter,
} from "react-icons/io5";

const Footer = (props) => {
  return (
    <>
      <div className="big-heading md:px-[28px]">
        <div className="heading-containt fancyFont lg:flex-row lg:justify-center lg:space-x-8 lg:text-[130px]">
          <span className="one">let's</span>
          <span className="two">code</span>
          <span className="three">together</span>
        </div>
      </div>

      <section
        ref={props.contactRef}
        id="contact"
        className="footer-container normalFont lg:px-[180px] 3:px-[240px]"
      >
        <div className="footer-first-div md:mx-4 md:flex justify-between">
          <div className="footer-heading lg:text-[70px]">
            <h1>Get</h1>
            <h1>in</h1>
            <h1>Touch</h1>
          </div>

          <div className="flex flex-col md:w-[400px] lg:w-[500px]">
            <div className="footer-buttons">
              <button className="contact-btn">
                <p className="btn-animation"></p>
                <span className="contact-btn-span">
                  {/* <a href="mailto:matif91201@gmail.com" target="_blank"> */}
                  matif91201@gmail.com
                  {/* </a> */}
                </span>
              </button>
              <button className="contact-btn">
                <span className="contact-btn-span">IND +91 7727075499</span>
              </button>
            </div>

            <div className="footer-socialMedia">
              <ul className="space-x-6">
                <li>
                  <a href="https://github.com/atif786k" target="_blank">
                    <IoLogoGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/mohammad-atif-a14b04205/"
                    target="_blank"
                  >
                    <IoLogoLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/_mohd.atif__/?hl=en"
                    target="_blank"
                  >
                    <IoLogoInstagram />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/moh.atif.927"
                    target="_blank"
                  >
                    <IoLogoFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/moh.atif.927"
                    target="_blank"
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
