import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = ({serviceRef, aboutRef, contactRef}) => {

  const scrollTOService = () => {
    serviceRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="header">
        <div className="linksHeader">
          <div className="logoHeader">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="restLinkHeader">
            <Link to="#" onClick={scrollToAbout}>About</Link>
            <Link to="#" onClick={scrollTOService}>Services</Link>
            <Link to="#" onClick={scrollToContact}>Contact Us</Link>
          </div>
      </div>
    </div>
  );
};

export default Header;
