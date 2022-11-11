import React, { useState, useEffect } from "react";
import "./App.css";
import MyContact from "./components/Contact/Contact";
import Header from "./components/HeaderFooter/Header";
import MyProjects from './components/ProjectsnSkill/MyProjects'
import MiniProject from "./components/ProjectsnSkill/MiniProject";
import Skill from "./components/ProjectsnSkill/Skills";
import Footer from './components/HeaderFooter/Footer'

import AboutMe from "./components/Intro/AboutMe";


function App() {
  const callback = entries => {
    entries.forEach(entry => {
      const elementDistanceFromTop = entry.target.getBoundingClientRect().top;

      if (
        elementDistanceFromTop <=
        (window.innerHeight || document.documentElement.clientHeight / 1.25)
      ) {
        entry.target.style.animation = entry.target.dataset.animate;
      } else {
        entry.target.style.animation = 'none';
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);

    const animationItems = document.querySelectorAll('.animate');

    animationItems.forEach(item => {
      observer.observe(item);
    });
  }, []);

  return (

      <div className="App">

        <Header/>


        <AboutMe/>
  
       <Skill/>
        <MyProjects/>
         <MiniProject/>
         <MyContact/>
         <Footer/> 

      </div>

  );
}

export default App;
