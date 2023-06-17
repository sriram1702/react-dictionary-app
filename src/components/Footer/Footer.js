import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https://www.instagram.com/sri_ram_h_17/" target="__blank">
          Sriram H ❤️ 
        </a>
      </span>
      <div className="iconContainer">
        <a href="https://www.instagram.com/sri_ram_h_17/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/sriram-h/" target="__blank">
          <i className="fa fa-linkedin" style={{fontSize:"25px"}}></i>
        </a>
        <a href="https://ramsri1702@gmail.com/" target="__blank">
        <i class="fa fa-google" aria-hidden="true"></i>

        </a>
      </div>
    </div>
  );
};

export default Footer;