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
        <Card className="m-2 skills__card" >
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
    <div key={content.id} className="mb-5 ">
       
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
      <div className="row skills__title">
        <h2  className="animate"
          data-animate="tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"> MY SKILLS</h2>
      </div>
      <div className="row">
        <div className="col col-3 col-md-4 col-lg-5">
            <div className="row animate" data-animate="slideInLeft 2s">
               {icon} 
            </div>
            </div>
        <div className="col col-9 col-md-8 col-lg-7">
        <div className ="row  animate myskill" data-animate="SlideInRight 3s">
            {mySkill}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
