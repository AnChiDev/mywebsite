import React, { Component } from "react";
import { CardImg } from "reactstrap";
import Button from "react-bootstrap/Button";
import Typical from "react-typical";
import { Fade } from "react-animation-components";
import "./intro.css";

class Intro extends Component {
  render() {
    return (
      <div className="container" id="aboutme">
        <div className="row">
          <div
            className="col col-8 col-md-4 col-lg-3 animate mx-auto"
            data-animate="slideInLeft 2s"
          >
            <CardImg
              src="assets/images/myavatar2.jpg"
              alt="my photo"
              id="home"
            />
          </div>

          <div
            className="col col-11 col-md-7 col-lg-8 mx-auto intro animate"
            data-animate="slideInRight 2s"
          >
            <Fade in timingFn="ease-in-out" duration="3000" delay="200">
              <h4 className="typical-hello">
                <Typical
                  steps={["Hi", 1000, "Hi! My name is Minh Tran👋!", 500]}
                  loop={Infinity}
                  wrapper="p"
                  className="hello"
                />
              </h4>

              <div className="intro-content text-start ">
                <p className="mb-8 leading-relaxed">
                  <br />I enjoy building software that makes peoples' lives
                  easier by writing elegant, performant. I also love everything
                  that's beautiful and colorful.
                </p>
                <h4>
                  I'm a
                  <span className="typical ">
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
                <a
                  href="assets/images/MinhTran.pdf"
                  download={"MinhTran-resume.pdf"}
                >
                  <Button
                    size="lg"
                    className="download-button"
                    style={{ backgroundColor: "#B1AFFF" }}
                  >
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
