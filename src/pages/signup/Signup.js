import React, { useState } from "react";
import "./Signup.scss";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";


function Signup() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const result = await axiosClient.post("/auth/signup", {
        name,
        lastName,
        email,
        password,
      });

      navigate("/login");

      console.log("signup rsult", result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="Sign-Up">
        <div className="tilt1">

        </div>

        <div className="tilt2">

        </div>

        <div className="login-box">
          <div className="slider-leftl">
            <div className="innerslider-left">
              <div className="bannerbigs">
                <h2 className='banners '>Socia<p>light</p></h2>
              </div>
            </div>
          </div>

          <div className="slider_right">
            <h2 className="heading">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                className="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
              <hr />

              <label htmlFor="name">Last Name</label>
              <input
                type="text"
                className="name"
                id="name"
                onChange={(e) => setLastName(e.target.value)}
              />
              <hr />
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
              Already have na account?{" "}
              <Link to="/login" className="link">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
