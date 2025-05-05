import React, { useState } from "react";
import logo from "../assets/logo.png";
import login from "../assets/login.webp";

import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { LuEyeClosed } from "react-icons/lu";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="loginPage">
      <div className="loginPageSection">
        <div className="loginContent">
          <div className="loginLogo">
            <Link to="/">
              <img src={logo} alt="" width="200px" />
            </Link>
          </div>
          <div className="loginForm">
            <h2>Welcome back!</h2>
            <p>The faster you fill up, the faster you set you career</p>
            <form action="" method="post">
              <div className="loginEmail">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div className="loginPassword">
                <label>Password</label>
                <div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                  <span
                    className="loginPasswordWrapper"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FiEye /> : <LuEyeClosed />}
                  </span>
                </div>
              </div>
              <button className="loginButton">Sign In</button>
            </form>
            <p className="loginSignUpLink">Don't have an account? <Link to="/signup">Sign Up</Link></p>
          </div>
        </div>
        <div className="loginImgBlock">
          <img src={login} alt="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
