// Navbar.jsx

import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { gauravLogo } from "../assets/images";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`header ${showMenu ? "show-menu" : ""}`}>
      <div className="navbar-container">
      {location.pathname !== "/" && ( 
          <div className={`menu-icon ${showMenu ? "active" : ""}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        )}
        {location.pathname !== "/" && (
          <nav className={`nav-links ${showMenu ? "show" : ""}`}>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        )}
        <div className="logo-container">
          <NavLink to={location.pathname !== "/" ? "/" : "/about"}>
            <img
              src={gauravLogo}
              alt="logo"
              className="logo object-contain"
            />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
