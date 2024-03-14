import React from "react";
import "../5_FooterPage/Footer.css";
import { BiLogoGmail } from "react-icons/bi";
import { FaRegCopyright } from "react-icons/fa6";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGithub,
} from "react-icons/io5";

const Footer = (props) => {
  return (
    <>
      <div className="big_heading md:px-[28px]">
        <div className="big_heading_inner fancyFont lg:flex-row lg:justify-center lg:space-x-8 lg:text-[130px]">
          <span className="one">let's</span>
          <span className="two">code</span>
          <span className="three">together</span>
        </div>
      </div>

      <section
        ref={props.contactRef}
        id="contact"
        className="footer_container normalFont lg:px-[180px]"
      >
        <div className="footer_first_container md:mx-4 md:flex justify-between">
          <div className="footer_heading lg:text-[70px]">
            <h1>Get</h1>
            <h1>in</h1>
            <h1>Touch</h1>
          </div>

          <div className="flex flex-col md:w-[400px] lg:w-[500px]">
            <div className="footer_buttons">
              <button className="contact_button btnType1">
                <span className="btn-txt">matif91201@gmail.com</span>
              </button>
              <button className="contact_button btnType1">
                <span className="btn-txt">IND +91 7727075499</span>
              </button>
            </div>

            <div className="footer_social">
              <ul className="space-x-6">
                <li>
                  <IoLogoLinkedin />
                </li>
                <li>
                  <IoLogoInstagram />
                </li>
                <li>
                  <IoLogoGithub />
                </li>
                <li>
                  <IoLogoFacebook />
                </li>
                <li>
                  <BiLogoGmail />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-slate-600" />

        <div className="footer_second_container">
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
