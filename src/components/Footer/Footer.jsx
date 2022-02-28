import React from "react";
import style from "../Footer/Footer.module.css";
import logo from "../../assetcs/images/navbar/logo.svg";

const Footer = () => {
  return (
    <box>
      <h1 style={{ textAlign: "left" }}>
        <img src={logo} alt="" />
      </h1>
      <container>
        <row>
          <column>
            <heading>About Us</heading>
            <a href="#">Aim</a>
            <a href="#">Vision</a>
            <a href="#">Testimonials</a>
          </column>
          <column>
            <heading>Contact Us</heading>
            <a href="#">Uttar Pradesh</a>
            <a href="#">Ahemdabad</a>
            <a href="#">Indore</a>
            <a href="#">Mumbai</a>
          </column>
          <column>
            <heading>Social Media</heading>
            <a href="#">
              <i>
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </a>
            <a href="#">
              <i>
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </a>
            <a href="#">
              <i>
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </a>
            <a href="#">
              <i>
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </a>
          </column>
        </row>
      </container>
    </box>
  );
};

export default Footer;
