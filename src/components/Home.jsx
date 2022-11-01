import { Component } from 'react';
import {MyContact} from './Contact/Contact';
import Intro from './Intro/Intro';
import MyProjects from './ProjectsnSkill/MyProjects'
import Skill from './ProjectsnSkill/Skills';

 class Home extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
   render(){
    return(
        <div id="home">
       
         <Intro/>
         <Skill/>
         <MyProjects/>
         <MyContact/>
        </div>
    )
   }}
   export default Home