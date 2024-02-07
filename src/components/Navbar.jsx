import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { gauravLogo } from "../assets/images";
import "./navbar.css";
import { motion } from "framer-motion";


const Navbar = () => {
  const { pathname } = useLocation();
  const isNotHomePage = pathname !== "/";
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  
  return (
    <header className={`header ${showMenu ? "show-menu" : ""}`}>
      <div className={isNotHomePage ? "navbar-container" : "navbar-container-home"}>
        {isNotHomePage && (
          <div className={`menu-icon ${showMenu ? "active" : ""}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        )}
        {isNotHomePage && (
          <motion.nav className={`nav-links ${showMenu ? "show" : ""}`}>
            <NavLink onClick={toggleMenu} to="/about">About</NavLink>
            <NavLink onClick={toggleMenu} to="/projects">Projects</NavLink>
            <NavLink onClick={toggleMenu} to="/contact">Contact</NavLink>
          </motion.nav>
        )}
        <div className="logo-container">
          <NavLink to={isNotHomePage ? "/" : "/about"}>
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
