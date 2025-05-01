import React from "react";
import ai from "../assets/serviceSvg/aiSupport.webp";

const ServiceCard = ({heading, img, content}) => {
  return (
    <div className="serviceCard">
      <div className="serviceCardImg">
        <img src={ai} alt="Service svg" />
      </div>
      <div className="serviceCardContent">
        <h3>{heading}</h3>
        <p>
          {content}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
