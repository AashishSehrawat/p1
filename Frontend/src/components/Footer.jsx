import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { createScrollFunction, handleHomeClick } from "../utils/scrollFunction";

const Footer = ({serviceRef, aboutRef, contactRef}) => {
  const today = new Date();
  let currYear = today.getFullYear();

  const location = useLocation();

  const {scrollToService, scrollToAbout, scrollToContact} = createScrollFunction({serviceRef, aboutRef, contactRef})

  return (
    <div className="footer">
      <div className="footerContent">
        <div>
          <h2>Getting Started</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum
            rerum magnam obcaecati asperiores neque aut suscipit. Doloribus,
            suscipit reiciendis!
          </p>
        </div>
        <Link to="/" className="button">
          Register Now
        </Link>
      </div>
      <div className="footerLink">
        <div className="footerLinkContent">
          <div className="footerLinkImgContent">
            <Link to="/" onClick={() => handleHomeClick(location.pathname)}>
            <img src={logo} alt="Logo" />
            </Link>
          </div>
          <p>
            CareerSathi EdTech Pvt. Ltd. <br />
            Ashoka garden <br />
            Bhopal, MP – 462023 <br />
            India
          </p>
          <div className="footerLinkPandE">
            <div className="footerLinkPhone">
              <p>Phone Number</p>
              <p>+91-8340783239</p>
            </div>
            <div className="footerLinkEmail">
              <p>Email</p>
              <p>officialcareersathi@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="footerDirectLink">
          <div className="footerQuickLink">
            <h3>Quick Link</h3>
            <div className="footerAllQuick">
              <Link className="link" to="/" onClick={() => handleHomeClick(location.pathname)}>Home</Link>
              <Link className="link" to="#" onClick={scrollToService}>Services</Link>
              <Link className="link" to="#" onClick={scrollToAbout}>About Us</Link>
              <Link className="link" to="#" onClick={scrollToContact}>Contact Us</Link>
            </div>
          </div>
          <div className="footerSocialLink">
            <h3>Social</h3>
            <div className="footerAllSocial">
              <Link className="link" to="https://www.instagram.com/officialcareersathi/?hl=en">Instagram</Link>
              <Link className="link" to="https://www.linkedin.com/in/career-sathi-75791734b/">Linkdin</Link>
              <Link className="link" to="https://x.com/Career_Sathi">Twitter</Link>
              <Link className="link" to="https://www.youtube.com/@officialCareerSathi">Youtube</Link>
              <Link className="link" to="https://www.threads.net/@officialcareersathi">Thread</Link>
            </div>
          </div>
          <div className="footerDataContent">
            © {currYear} Career Sathi. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
