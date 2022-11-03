import React, { useState } from "react";
import "./basicinfo.css";

function BasicInfo() {
  return (
    <div>
      <div id="about" className ="container">
        <div className="row">
          <h2
            className="animate about-title"
            data-animate="tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"
          >
            ABOUT ME
          </h2>
        </div>

   
        <div className="row">
          <div
            className="col-12 col-md-6 col-lg-6  animate about-info"
            data-animate="slideInLeft 2s"
          >
            <h4>Get to know me!</h4>
            <p>
              My name is Minh Tran. Few years ago, I worked as a recruiter and
              administrative staff. I started learning how to code in January
              2022.
              <br />I enjoy coding and the challenge of learning something new
              everyday. My goal is to pursue a career in the field of front-end
              development.
            </p>
          </div>
          <div
            className=" col-12 col-md-6 col-lg-6 animate about-education"
            data-animate="slideInRight 2s"
          >
            <h4>Education</h4>
            <p>2010-2015: Bachelor Of Law - Hanoi Law University</p>

            <p>
              2016-2017: Graduated the Lawyer Training Course of Judicial
              Academy.
            </p>

            <p>2022: Taking part in Funix's courses</p>
          </div>
      </div>
    </div>
    </div>
  );
}

export default BasicInfo;
