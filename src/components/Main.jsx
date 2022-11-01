import { Component } from "react";
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import AboutMe from "./AboutMe";
import {MyContact} from "./Contact/Contact"
import Footer from "./Footer";
import Header from "./Header/Header";
import Home from "./Home";
import MyProjects from "./ProjectsnSkill/MyProjects";
import Skill from "./ProjectsnSkill/Skills";





class Main extends Component {
  
render(){

    return(
        <div  >
           <Header/>
           <Switch>
         
            <Route exact path ='/home' component ={Home}/>
            <Route path ='/aboutme' component ={AboutMe}/>
       
            <Route exact path ='/myprojects' component ={MyProjects}/>
            <Route exact path ='/skill' component ={Skill}/>
            <Route path ='/mycontact' component ={MyContact}/>
            <Redirect to='/home'/>
          
           </Switch>
        
           <Footer/>
        
        </div>
    )
}
}
export default withRouter(Main);