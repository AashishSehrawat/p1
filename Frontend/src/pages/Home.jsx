import React, { lazy } from "react";
import mainImage from "../assets/mainSideImage.webp";
const Header = lazy(() => import("../components/Header.jsx"));
const Footer = lazy(() => import("../components/Footer.jsx"));

const Home = () => {
  return (
    <div className="homeSection">
      <Header />

      {/* main section */}
      <div className="mainSection">
        <div className="container">
          <div className="blocksMain">
            <div className="contentBlockMain">
              <div className="contentDataMain">
                <h1>Guiding Future, Building Careers</h1>
                <p>
                  We empower students to discover their true potential and make
                  confident career decisions. Join us to explore the right path
                  with expert counseling and mentorship.
                </p>
                <button className="button">Register Now</button>
              </div>
            </div>
            <div className="imageBlockMain">
              <img src={mainImage} alt="Carrer" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
