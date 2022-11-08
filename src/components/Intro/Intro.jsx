import React, { Component } from "react";
import { CardImg } from "reactstrap";
import Button from "react-bootstrap/Button";
import Typical from "react-typical";
import { Fade } from "react-animation-components";
import './intro.css';

class Intro extends Component {
  render() {
    return (
      <div className="container"  id="aboutme">
        <div className="row mt-5">
          <div className="col col-10 col-md-4 col-lg-3 mx-auto animate" data-animate="slideInLeft 2s">
            <CardImg
              src="assets/images/myavatar2.jpg"
              alt="my photo"
              style={{ borderRadius: "50%" }}
              id="home"
            />
          </div>
     
          <div className="col col-10 col-md-6 col-lg-7 mx-auto intro animate" data-animate="slideInRight 2s">
          <Fade in timingFn="ease-in-out" duration="3000" delay="200">
      
            <h1 >
   
              <Typical
                steps={["Hi", 1000, "Hi! My name is Minh Tran👋!", 500]}
                loop={Infinity}
                wrapper="p"
              className ="hello"
              />
            </h1>

         
              <div className="intro-content fs-5 text-start ">
                <p className="mb-8 leading-relaxed text-xl">

                  <br />I enjoy building software that makes peoples' lives
                  easier by writing elegant, performant. I also love everything that's beautiful and
                  colorful.
                </p>
                <h4>
                  I'm a
                  <span  className="typical">
                  <Typical
                    steps={[
                      " Developer 💻",
                      2000,
                      " Designer 🎨",
                      2500,
                      " Traveller ✈️",
                      2000,
                    ]}
                    loop={Infinity}
                    wrapper="b"
                  />
                  </span>
                </h4>
                    </div>
                 
                <div className="flex">
                <a href="assets/images/MinhTran.pdf" download={"MinhTran-resume.pdf"}>
                  <Button  size="lg"  className="download-button" style={{backgroundColor: "#B1AFFF"}}>
                    DOWNLOAD RESUME
                  </Button>
                  </a>
                </div>
       
                </Fade>
          </div>
     
        </div>
  </div>
    );
  }
}
export default Intro;
