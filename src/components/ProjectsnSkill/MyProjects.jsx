import { Component } from "react";
import {
  Card,
  CardBody,
  Button,
  CardLink,
  CardTitle,
  CardText,
} from "reactstrap";
import { PROJECTS } from "../../shared/Projects";
import { FadeTransform } from "react-animation-components";

import "./skills.css";

function RenderImg({ project }) {
  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: "scale(0.5) translateY(50%)",
      }}
      delay={500}
      duration={1000}
    >
   
      <Card style={{ backgroundColor: "rgba(253, 121, 168,0.1)" }}>
        <div className="row animate"  data-animate="slideInLeft 2s">
          <div className="col-12 col-md-8 col-lg-8 project-container">
            <img
              alt="Card cap"
              src={project.image}
     
            />
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <CardBody>
              <CardTitle tag="h4">{project.name}</CardTitle>
            </CardBody>

            <CardBody>
              <CardText>{project.content}</CardText>
              <Button  outline color="primary" className="m-3 project__button">
                {" "}
                <CardLink
                  href={project.view}
                  target="_blank"
                  className="project__link"
                >
                  Visit website
                </CardLink>
              </Button>
              <Button outline color="primary" className="project__button">
                {" "}
                <CardLink
                  href={project.source}
                  target="_blank"
                  className="project__link"
                >
                  Visit source
                </CardLink>
              </Button>
            </CardBody>
          </div>
        </div>
      </Card>
    </FadeTransform>
  );
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS,
    };
  }
  render() {
    const menu = this.state.projects.map((project) => {
   
      return (
        <div key={project.id} className="col-12 mt-4 mx-auto">
          <RenderImg project={project} />
        </div>
      );
    });

    return (
      <div className="container mt-5 projects__text" id="myprojects">
        <h1  className="animate project__title"
          data-animate="tracking-in-expand 2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both">FEATURED</h1>
        <div className="row menuproject">{menu}</div>
        </div>
    );
  }
}
export default Projects;
