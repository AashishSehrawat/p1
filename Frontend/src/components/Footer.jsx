import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  const today = new Date();
  let currYear = today.getFullYear();
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
            <img src={logo} alt="Logo" />
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
              <Link className="link" to="/">Home</Link>
              <Link className="link" to="/">Services</Link>
              <Link className="link" to="/">About Us</Link>
              <Link className="link" to="/">Contact Us</Link>
            </div>
          </div>
          <div className="footerSocialLink">
            <h3>Social</h3>
            <div className="footerAllSocial">
              <Link className="link" to="/">Instagram</Link>
              <Link className="link" to="/">Linkdin</Link>
              <Link className="link" to="/">Twitter</Link>
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
