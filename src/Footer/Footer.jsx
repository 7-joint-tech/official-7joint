import React from "react";
import {  FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import logo from "../../public/3.png";
import {Link} from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="relative top-0 left-0 w-full bg-[#DADADA] min-h-[200px] mt-[10rem]">
        <div className="flex justify-between items-center w-[90%] mx-auto pt-10">
        <a href='#'>
          <img className="w-[117px]" src={logo} alt="" />
        </a>
        <ul className="ml-[24%] lg:ml-[320px] text-[14px] md:text-[18px]  font-medium text-[#00000] dark:text-[#00000073] space-y-2 self-center" >
          <li className="text-[18px] md:text-[24px] text-[#000000]">
            Page
          </li>
          <li>
            < Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Services">services</Link>
          </li>
          <li>
            <Link to="/Team">Team</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
         
        </ul>
      </div>
      <div className=" absolute bottom-8  flex justify-center items-center left-5 right-5 space-x-4">
        <a href="#">
          <FaFacebook size={30} className=" dark:text-[#00000073]" />
        </a>
        <a href="#">
          <FaLinkedin size={30} className=" dark:text-[#00000073]" />
        </a>
        <a href="#">
          <FaTwitter size={30} className=" dark:text-[#00000073]" />
        </a>
        <a href="#">
          <FaWhatsapp size={30} className=" dark:text-[#00000073]" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
