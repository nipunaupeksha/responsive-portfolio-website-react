import React from "react";
import "./header.css";
import {FaAngleDoubleRight} from  'react-icons/fa';
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Emma Touka</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down <FaAngleDoubleRight className="fa-arrow"/>
        </a>
      </div>
    </header>
  );
};

export default Header;
