import React from "react";
import "../../assets/style.css";
import Logo from "../../assets/food_logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="header_links">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">About</a>
          </li>
          <li>
            <a href="#testimonials">Resources</a>
          </li>
          <li>
            <a href="#" className="contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
