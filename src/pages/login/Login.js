import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import { KEY_ACCESS_TOKEN, setItem } from "../../utils/localStorageManager";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      console.log("from login");
      const response = await axiosClient.post("/auth/login", {
        email,
        password,
      });
      console.log(response,"from login")

        setItem(KEY_ACCESS_TOKEN, response.result.accessToken);
        console.log(response.result.accessToken);
        // navigate("/");

    } catch (error) {
      setEmail("");
      setPassword("");
     
    }
  }

  return (
    <div className="Login">
      <div className="tilt1">

      </div>

      <div className="tilt2">

      </div>

      <div className="login-boxl">
        <div className="slider-leftl">
          <div className="innerslider-left">
            <div className="bannerbigs">
              <h2 className='banners '>Socia<p>light</p></h2>
            </div>
          </div>
        </div>

        <div className="slider-right">
          <h2 className="heading">Login</h2>
          <form  className='login-from' onSubmit={handleSubmit}>
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
