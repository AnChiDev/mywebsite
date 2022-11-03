import { Component } from 'react';
import {
    Card,
    CardBody, Button,
 CardLink,
    CardTitle,
    CardText,
  } from "reactstrap";
  import { FadeTransform } from 'react-animation-components';
import {MINIPROJECTS} from '../../shared/Projects';
import './skills.css';

function ShowMinisproducts({sproduct}){
    return(
        <div>
 <FadeTransform
        in
        transformProps={{
          exitTransform: 'scale(0.5) translateY(50%)',
        }}
        delay={1000}
        duration={1000}
      >
    <Card style={{backgroundColor:"rgba(253, 121, 168,0.1)", height:"600px"}}>
            
            <img
              alt="Card cap"
              src={sproduct.image}
              width="100%"
              height="380px"
            />
            <CardBody>
              <CardTitle tag="h5">{sproduct.name}</CardTitle>
              <CardText>
               {sproduct.content}
              </CardText>
              <Button color="primary" outline className="m-1 miniproject__button"> <CardLink className="miniproject__link" href={sproduct.view} target="_blank" >Visit website</CardLink></Button>
              <Button color="primary" outline className="miniproject__button"> <CardLink className="miniproject__link" href={sproduct.source} target="_blank" >Visit source</CardLink></Button>
             
            </CardBody>
          </Card>
          </FadeTransform>

        </div>
    )
}
class MiniProject extends Component{
    constructor(props){
        super(props);
        this.state={
            smallproducts : MINIPROJECTS,
        }
    }
    
    render(){
        const menumini= this.state.smallproducts.map((sproduct)=>{
            //col-12 col-md-4 col-lg-6 m-4
              return (
                  <div key ={sproduct.id} className=" col col-6 col-md-4 col-lg-3 m-4 mx-auto animate menumini"  data-animate="slideInLeft 2s">
                     
                  <ShowMinisproducts sproduct = {sproduct} />
                 
                  </div>
              )
          })
          /*
           id: 6,
        name: "Todo List",
        image: 'assets/images/sproducts/todolist.gif',
        title: 'My Todo List',
        source:'https://github.com/anchicode/mytodolist/tree/master',
        view:'https://anchicode.github.io/mytodolist/',
        content: 
          */
return(
    <div className='container'>
    <div className="row">
    <h1 className="mt-5 animate miniproject__title"
          data-animate="tracking-in-expand 3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"> Mini Projects</h1>

        </div>
<div className ="row miniproject">
{menumini}
</div>
    </div>
)
}
}
export default MiniProject;