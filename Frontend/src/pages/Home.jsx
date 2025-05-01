import React, { lazy, useRef } from "react";
import mainImage from "../assets/mainSideImage.webp";
import boostImg from '../assets/boostImg.webp';
import check from "../assets/check.svg";
import ai from "../assets/serviceSvg/aiSupport.webp";
import { Link } from "react-router-dom";
const Header = lazy(() => import("../components/Header.jsx"));
const Footer = lazy(() => import("../components/Footer.jsx"));
const ServiceCard = lazy(() => import("../components/ServiceCard.jsx"));

const Home = () => {

  // useref hook scroll down
  const serviceRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);


  // service card static data
  const firstServiceCard = {
    heading: "Smart Career Start",
    img: {ai},
    content: "AI-driven assessments to unlock the best career paths for students."
  }
  const secondServiceCard = {
    heading: "Future Fit",
    img: {ai},
    content: "Personalized career roadmaps based on personality, skills, and market trends."
  }
  const thirdServiceCard = {
    heading: "Mentor Magic",
    img: {ai},
    content: "Real insights from top college alumni for informed career decisions."
  }
  const fourthServiceCard = {
    heading: "Pathfinder Pro",
    img: {ai},
    content: "Science-backed guidance to match students with their ideal careers."
  }
  const fifthServiceCard = {
    heading: "Trend Track",
    img: {ai},
    content: "Career advice aligned with emerging job markets and future opportunities."
  }
  const sixthServiceCard = {
    heading: "Unlock Potential",
    img: {ai},
    content: "Discover hidden strengths and ideal career fits with AI-powered analysis."
  }

  return (
    <div className="homeSection">
      <Header  
        aboutRef = {aboutRef}
        serviceRef = {serviceRef}
        contactRef = {contactRef}
      />

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
                <Link className="button">Register Now</Link>
              </div>
            </div>
            <div className="imageBlockMain">
              <img src={mainImage} alt="Carrer" />
            </div>
          </div>
        </div>
      </div>

      {/* boost section */}
      <div className="boostSection">
        <div className="container">
          <div className="boostBlocks">
            <div className="boostImgBlock">
              <img src={boostImg} alt="" />
            </div>
            <div className="boostContentBlock">
              <h2>Boost College Getting</h2>
              <div className="boostContentPointers">
                <div><img src={check} alt="check mark" /><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, ea facere nulla dignissimos ab eaque!</span></div>
                <div><img src={check} alt="check mark" /><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, ea facere nulla dignissimos ab eaque!</span></div>
              </div>
              <Link to="" className="button">Register Now</Link>
            </div>
          </div>  
        </div>
      </div>

      {/* service secion */}
      <div ref={serviceRef} className="serviceSection">
        <div className="container">
          <h2>Services We Provide</h2>
          <div className="serviceCardsBlock">
            <ServiceCard {...firstServiceCard} />
            <ServiceCard {...secondServiceCard} />
            <ServiceCard {...thirdServiceCard} />
            <ServiceCard {...fourthServiceCard} />
            <ServiceCard {...fifthServiceCard} />
            <ServiceCard {...sixthServiceCard} />
          </div>
        </div>
      </div>

      {/* about section */}
      <div ref={aboutRef} className="aboutSection">

      </div>

      {/* conatct section */ }
      <div ref={contactRef} className="contactSection">
        
      </div>
      <Footer />
    </div>
  );
};

export default Home;
