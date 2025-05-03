import React, { lazy, useRef } from "react";
import mainImage from "../assets/mainSideImage.webp";
import boostImg from "../assets/boostImg.webp";
import check from "../assets/check.svg";
import ai from "../assets/serviceSvg/aiSupport.webp";
import person from "../assets/testimonial/4.png";
import aboutUs from "../assets/aboutUs.webp";
import qr from "../assets/contact/contactQR.jpg";
import email from "../assets/contact/email.svg";
import phone from "../assets/contact/phone.svg";
import office from "../assets/contact/office.svg";
import twitter from "../assets/contact/tw.svg";
import linkdin from "../assets/contact/link.svg";
import insta from "../assets/contact/insta.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";
import {
  TestimonialNextArrows,
  TestimonialPrevArrows,
} from "../components/TestimonialArrows.jsx";

const Header = lazy(() => import("../components/Header.jsx"));
const Footer = lazy(() => import("../components/Footer.jsx"));
const ServiceCard = lazy(() => import("../components/ServiceCard.jsx"));
const TestimonialCardCom = lazy(() =>
  import("../components/TestimonialCardCom.jsx")
);

const Home = () => {
  // useref hook scroll down
  const serviceRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  // service card static data
  const firstServiceCard = {
    heading: "Smart Career Start",
    img: { ai },
    content:
      "AI-driven assessments to unlock the best career paths for students.",
  };
  const secondServiceCard = {
    heading: "Future Fit",
    img: { ai },
    content:
      "Personalized career roadmaps based on personality, skills, and market trends.",
  };
  const thirdServiceCard = {
    heading: "Mentor Magic",
    img: { ai },
    content:
      "Real insights from top college alumni for informed career decisions.",
  };
  const fourthServiceCard = {
    heading: "Pathfinder Pro",
    img: { ai },
    content:
      "Science-backed guidance to match students with their ideal careers.",
  };
  const fifthServiceCard = {
    heading: "Trend Track",
    img: { ai },
    content:
      "Career advice aligned with emerging job markets and future opportunities.",
  };
  const sixthServiceCard = {
    heading: "Unlock Potential",
    img: { ai },
    content:
      "Discover hidden strengths and ideal career fits with AI-powered analysis.",
  };

  // testimonial data
  const testimonialData = [
    {
      name: "Nittin",
      img: person,
      college: "IIT Delhi",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus culpa dolorum eius ut? Id vel odit dolorem, quo aut voluptas beatae nostrum nemo! Veniam similique corrupti dolores nobis magnam iste sequi tempora ex aperiam labore.",
    },
    {
      name: "ASH",
      img: person,
      college: "IIT Delhi",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus culpa dolorum eius ut? Id vel odit dolorem, quo aut voluptas beatae nostrum nemo! Veniam similique corrupti dolores nobis magnam iste sequi tempora ex aperiam labore.",
    },
    {
      name: "ankitn",
      img: person,
      college: "IIT Delhi",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus culpa dolorum eius ut? Id vel odit dolorem, quo aut voluptas beatae nostrum nemo! Veniam similique corrupti dolores nobis magnam iste sequi tempora ex aperiam labore.",
    },
  ];

  // setting for react slider
  const settingsTest = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    nextArrow: <TestimonialNextArrows />,
    prevArrow: <TestimonialPrevArrows />,
  };

  return (
    <div className="homeSection">
      <Header
        aboutRef={aboutRef}
        serviceRef={serviceRef}
        contactRef={contactRef}
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
                <div>
                  <img src={check} alt="check mark" />
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Porro, ea facere nulla dignissimos ab eaque!
                  </span>
                </div>
                <div>
                  <img src={check} alt="check mark" />
                  <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Porro, ea facere nulla dignissimos ab eaque!
                  </span>
                </div>
              </div>
              <Link to="" className="button">
                Register Now
              </Link>
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

      {/* testimonial section */}
      <div className="testimonialSection">
        <div className="container">
          <h2>Discover What Our Students Speak</h2>
          <div>
            <Slider {...settingsTest}>
              {testimonialData.map((item, index) => (
                <TestimonialCardCom
                  key={index}
                  name={item.name}
                  img={item.img}
                  college={item.college}
                  content={item.content}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* about section */}
      <div ref={aboutRef} className="aboutSection">
        <div className="container">
          <div className="aboutBlocks">
            <div className="aboutContentBlock">
              <div>
                <h2>About Us</h2>
                <h4>About CareerSathi – Your Career Compass</h4>
                <p>
                  CareerSathi is revolutionizing career guidance for India’s
                  students. We cut through the confusion with personalized,
                  AI-powered advice combined with human expertise. Our mission
                  is simple: help students in classes 8-12 discover their
                  perfect career path with confidence.
                </p>
                <p>
                  We make career decisions easier with psychometric tests,
                  expert mentorship, and up-to-date industry insights. Whether
                  you're exploring STEM, arts, or unconventional careers, we
                  provide the clarity you need to shape your future. CareerSathi
                  isn’t just guidance – it’s your roadmap to success.
                </p>
                <Link to="/aboutUs" className="button">
                  Know more
                </Link>
              </div>
            </div>
            <div className="aboutImgBlock">
              <img src={aboutUs} alt="About Us" />
            </div>
          </div>
        </div>
      </div>

      {/* conatct section */}
      <div ref={contactRef} className="contactSection">
        <div className="container">
          <div className="contactBlocks">
            <div className="contactImgBlock">
              <img src={qr} alt="Qr code" />
              <Link to="" className="button">
                Contact Us
              </Link>
            </div>
            <div className="contactContentBlock">
              <div>
                <h2>Contact Us</h2>
                <p>
                  Email, call or scan the QR code to learn how Career Sathi can
                  solve your problem.
                </p>
                <p>
                  <img src={email} alt="email id" />
                  officialcareersathi@gmail.com
                </p>
                <p>
                  <img src={phone} alt="Phone number" /> +91-8340783239
                </p>
                <p>
                  <img src={office} alt="office" />
                  CareerSathi EdTech Pvt. Ltd. Ashoka garden Bhopal, MP – 462023
                  India
                </p>
                <div className="contactFollowBlock">
                  <h3>Follow Us</h3>
                  <h4>"Join our community for career inspiration and updates!"</h4>
                  <div>
                    <Link><img src={insta} width="45px" alt="Instagram" /></Link>
                    <Link><img src={linkdin} width="53px" alt="Linkdin" /></Link>
                    <Link><img src={twitter} width="40px" alt="Twitter" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
