import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
    
        <div className="linksHeader">
          <div className="logoHeader">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="restLinkHeader">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contactUs">Contact Us</Link>
          </div>
      
      </div>
    </div>
  );
};

export default Header;
