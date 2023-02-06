import React, { useState } from "react";
import "./Signup.scss";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import nature from "../../assets/Nature.jpg";
import Typewriter from "typewriter-effect";

import nature1 from "../../assets/back2.jpg";
import back4 from "../../assets/back4.jpg";
import back5 from "../../assets/back5.jpg";
import back6 from "../../assets/back6.jpg";

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
        <div className="login-box">
          <div className="slider-left">
          <div className="upper">
            <div className="box">
             
              <img src={nature} alt="" />
            </div>
            <div className="box">
           
              <img src={nature1} alt="" />
            </div>
            <div className="box">
            
              <img src={back4} alt="" />
            </div>
          </div>

          <div className="middle">
            {/* <h2>“Photography is the art of making memories tangible.”</h2> */}
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString("“Photography is the art of making memories tangible.”")

                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Share your memories....")
                  .start();
              }}
            />
          </div>

          <div className="lower">
            <div className="box">
              {" "}
              <img src={back5} alt="" />
            </div>
            <div className="box">
              {" "}
              <img src={back6} alt="" />
            </div>
            <div className="box">
              {" "}
              <img src={back5} alt="" />
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
