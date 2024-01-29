import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { gauravLogo } from "../assets/images";
import './navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <header className='header'>
       <div className="logo-container">
      <NavLink to={location.pathname !='/'?'/':'/about'}>
        <img src={gauravLogo} alt='logo'  className='logo object-contain'
        style={{
        width: '60px', 
        height: '60px',
    
        }}/>
      </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
