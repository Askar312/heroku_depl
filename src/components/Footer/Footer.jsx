import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "../Footer/FooterStyles.js";
import logo from "../../assetcs/images/navbar/logo.svg";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ marginTop: "-3vh" }}>
        <img src={logo} alt="" />
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i>
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i>
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>WhatsApp</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i>
                <span style={{ marginLeft: "10px" }}>Telegram</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
