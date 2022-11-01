import { Card, CardText, CardBody, Button } from "reactstrap";
import { SKILLS, CONTENTS } from "../../shared/Skills";
import { FadeTransform, Fade } from 'react-animation-components';
import './skills.css';

function RenderIcon({ skill }) {
  return (
    <FadeTransform
    in
    transformProps={{
      exitTransform: 'scale(0.5) translateY(50%)',
    }}
    delay={200}
    duration={500}
  >
        <Card className="m-2 skills__card">
        <Button color="primary" outline >
        <img src={skill.image} alt="skill" width="120px" height="120px" className ="skills__icon" />
      </Button>  
      <CardText className="skills__name">  {skill.name}</CardText>
        </Card>
   

    </FadeTransform>
  );
}

function Skill() {
  const icon = SKILLS.map((skill) => {
    return (
      <div key={skill.id} className="col-sm-2 col-md-3 col-lg-4">
        <RenderIcon skill={skill} />
      </div>
    );
  });
  const mySkill = CONTENTS.map((content)=>{
    return(
        <Fade in>
    <div key={content.id} className="mb-5 mt-4 ">
       
        <Card className="skills__content" >
                <CardBody>
                    <CardText>
                        <p style={{display:'flex', justifyContent:'left'}}>  {content.substance}</p>
                      
                    </CardText>
                </CardBody>
            </Card>
  </div>
  </Fade>
  )})
  //"Skills can be taught, personality is inherent". I prefer to keep learning, continue challenging myself, and do interesting things that matter.
  return (
    <div className="container" id="skills">
      <div className="row mt-5 skills__text">
        <h2> My Skills</h2>
      </div>
      <div className="row mt-5">
        <div className="col col-3 col-md-4 col-lg-5">
            <div className="row">
               {icon} 
            </div>
            </div>
        <div className="col col-9 col-md-8 col-lg-7">
            {mySkill}
        </div>
      </div>
    </div>
  );
}

export default Skill;
