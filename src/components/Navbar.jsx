import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { logo } from "../assets/images";

const Navbar = () => {
  const location = useLocation();

  return (
    <header className='header'>
      <NavLink to={location.pathname !='/'?'/':'/about'}>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>
    </header>
  );
};

export default Navbar;
