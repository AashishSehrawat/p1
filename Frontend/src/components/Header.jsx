import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { createScrollFunction, handleHomeClick } from "../utils/scrollFunction";

const Header = ({ serviceRef, aboutRef, contactRef }) => {
  const location = useLocation();

  const { scrollToService, scrollToAbout, scrollToContact } =
    createScrollFunction({ serviceRef, aboutRef, contactRef });

  return (
    <div className="header">
      <div className="linksHeader">
        <div className="logoHeader">
          <Link to="/" onClick={() => handleHomeClick(location.pathname)}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="restLinkHeader">
          <Link to="/" onClick={() => handleHomeClick(location.pathname)}>
            Home
          </Link>
          <Link to="#" onClick={scrollToService}>
            Services
          </Link>
          <Link to="#" onClick={scrollToAbout}>
            About
          </Link>
          <Link to="#" onClick={scrollToContact}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;


