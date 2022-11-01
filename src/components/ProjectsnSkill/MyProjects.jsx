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
import MiniProject from "./MiniProject";
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
        <div className="row">
          <div className="col-8">
            <img
              alt="Card cap"
              src={project.image}
              width="100%"
              height="450px"
            />
          </div>
          <div className="col-4">
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
      //col-12 col-md-4 col-lg-6 m-4
      return (
        <div key={project.id} className="col-12 mt-4 mx-auto">
          <RenderImg project={project} />
        </div>
      );
    });

    return (
      <div className="container mt-5 projects__text" id="myprojects">
        <h1>FEATURED</h1>
        <div className="row mt-5">{menu}</div>
        <h1 className="mt-5"> Mini Projects</h1>
        <div className="row">
          <MiniProject />
        </div>
      </div>
    );
  }
}
export default Projects;
