import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import { KEY_ACCESS_TOKEN, setItem } from "../../utils/localStorageManager";
import nature from "../../assets/Nature.jpg";
import Typewriter from "typewriter-effect";

import nature1 from "../../assets/back2.jpg";
import back4 from "../../assets/back4.jpg";
import back5 from "../../assets/back5.jpg";
import back6 from "../../assets/back6.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axiosClient.post("/auth/login", {
        email,
        password,
      });
      setItem(KEY_ACCESS_TOKEN, response.result.accessToken);
      navigate("/");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="Login">
      <div className="login-box">   

        <div className="slider-right">
          <h2 className="heading">Login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <hr />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}

            />
            <hr />

            <input type="submit" className="submit" />
          </form>
          <p>
            {" "}
            do not have an account?{" "}
            <Link to="/signup" className="link">
              Sign Up
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
