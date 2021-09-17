import React from "react";
import { NavLink } from "react-router-dom";
import web from "../image/2-design.jpg"
import "./Feature.css"

const Feature = () => {
  return (
    <>
      <div className="feature_div">
        <div className="container">
          <img src={web} className="img_fluid" alt="feature" />
          <div className="center_element">
            <h1>
              WE ARE A <br /> LANDING PAGE
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis sed
              dapibus leo nec ornare diam sed commodo nibh ante facilisis
              bibendum.
            </p>
            <NavLink className="btn_but" to="/About">
              LEARN MORE
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
