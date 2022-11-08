import React, { useState, useEffect} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import DayNightToggle from "react-day-and-night-toggle";
import "./Header.css";

export default function Header() {
  //change theme
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("data-theme") === "dark" ? true : false
  );

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      const newColorScheme = e.matches ? "dark" : "light";

      setIsDarkMode(newColorScheme === "dark" ? true : false);
      localStorage.setItem("data-theme", newColorScheme);
      document.body.setAttribute(
        "data-theme",
        localStorage.getItem("data-theme")
      );
    });

  const handleChangeTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      localStorage.setItem("data-theme", "dark");
      document.body.setAttribute("data-theme", "dark");
    } else {
      localStorage.setItem("data-theme", "light");
      document.body.setAttribute("data-theme", "light");
  
    }
  };
  //nav collapse
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  //scroll
  const [fixedNavbar, setFixedNavbar] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fixedNavbar]);

  const handleScroll = () => {
    setFixedNavbar(window.pageYOffset > 80);
  };
  return (
    <div>
    <div className="container">
     <Navbar expand="md"  fixed="top"  className="head" container="md" >
        <NavbarBrand href="#home" className ="navbar__brand">  Minh Tran </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="#home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#aboutme">
               About Me
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar >
              <DropdownToggle nav caret>
                Portfolio
              </DropdownToggle>
              <DropdownMenu right className ="dropdown">
                <DropdownItem>   <NavLink href="#myprojects">My Projects</NavLink></DropdownItem>
                <DropdownItem> <NavLink href="#skills">Skills</NavLink></DropdownItem>
               
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </Nav>
          <DayNightToggle
            size={32}
            onChange={handleChangeTheme}
            checked={isDarkMode}
          />
        </Collapse>
      </Navbar>

    </div>
    </div>
  );
}
