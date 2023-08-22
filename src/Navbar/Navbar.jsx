import logo from "../../public/logo2.png";
// import Button from "../Button";
import "./nav";
import React from 'react';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import {Link} from 'react-router-dom';






const Navbar = () => {
  const [navIcons, setNavIcons] = useState(<RiMenu3Line />);
  const [navToggle, setNavToggle] = useState("false");

 //  Open Navbar Links > 768px
   const openNavLink = () => {
    setNavToggle("true");
    setNavIcons(<RiCloseLine />);
  };
  //Close Navbar Links > 768px
  const closeNavLink = () => {
    setNavToggle("false");
    setNavIcons(<RiMenu3Line />);
  };
  //Function for closing and opening
  const navTogglingFunction = () => {
    navToggle == "false" ? openNavLink() : closeNavLink();
  };

  return (
  
       <nav className="w-full h-[80px] flex justify-between items-center fixed top-0 left-0 z-50 px-4">
      <Link href="#">
        <img className="w-[70px] h-[50px] sm:w-[50px]" src={logo} alt="" />
      </Link>

        {/* Nav Links */}
        <ul className="animation" data-nav-toggle={navToggle}>
          <div className="flex flex-col md:flex-row">

          <Link className="py-2 px-4 rounded-[7px] hover:shadow-md hover:bg-gradient-to-r from-primary to-secondary active:scale-90 duration-200 text-gray hover:text-white nav-link-animation"
          to="/" onClick={closeNavLink}>
          Home
        </Link> 
        <Link className="py-2 px-4  rounded-[7px] hover:shadow-md active:scale-90 duration-200 text-gray hover:text-white hover:bg-gradient-to-r from-primary to-secondary nav-link-animation"
          href="#" onClick={closeNavLink} to="/Services">
          Services
        </Link>
        <Link className="py-2 px-4 rounded-lg my-2 md:my-0 hover:shadow-md md:mr-4 mb-2 md:mb-0 duration-200 nav-link-animation hover:text-white hover:bg-gradient-to-r from-primary to-secondary"
           to="/Team" onClick={closeNavLink}>
          Team
        </Link>
        <Link className="py-2 px-4 rounded-lg my-2 md:my-0 hover:shadow-md md:mr-4 mb-2 md:mb-0 duration-200 nav-link-animation hover:text-white hover:bg-gradient-to-r from-primary to-secondary"
           to="/Portfolio" onClick={closeNavLink}>
         Porfolio
        </Link> 
        <Link className="py-2 px-4  rounded-[7px] hover:shadow-md active:scale-90 duration-200 text-gray  hover:text-white hover:bg-gradient-to-r from-primary to-secondary nav-link-animation"
          href="#" onClick={closeNavLink} to="/Contact">
          Contact
        </Link>
          </div>

       
        
        
      </ul>
      
      {/* icons for toggling */}
      <div className="block md:hidden text-2xl" onClick={navTogglingFunction}>
      {navIcons}
      </div>
    </nav>
    
  );
  };


export default Navbar;









