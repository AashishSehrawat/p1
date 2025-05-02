import React from 'react'
import star from "../assets/testimonial/star.svg";

const TestimonialCardCom = ({name, img, college, content}) => {
  return (
    <div className='testimonialCard'>
        <div className='testiStars'>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
        </div>
        <p className='testiContent'>
            {content}
        </p>
        <div className='testiUserDetail'>
            <img src={img} alt="" />
            <div className='testiUserName'>
                <h4> {name} </h4>
                <p> {college} </p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCardCom
