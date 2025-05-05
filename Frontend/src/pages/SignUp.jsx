import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signupPage">
      <div>
        <div className="signupStudent">
          <div className="signupStudentBlock">
            <h2>For Students</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam est praesentium dolorum neque pariatur repudiandae
              saepe eveniet eligendi illum officiis!
            </p>
            <Link to="student" className="button">
              Sign Up
            </Link>
          </div>
        </div>
        <div className="signupMentor">
          <div className="signupMentorBlock">
            <h2>For Mentors</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam est praesentium dolorum neque pariatur repudiandae
              saepe eveniet eligendi illum officiis!
            </p>
            <Link to="mentor" className="button">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
