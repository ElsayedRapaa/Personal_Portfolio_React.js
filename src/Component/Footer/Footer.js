import React from "react";
// File Css
import "./footer.css";
// React Icons
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <a className="logo" href="#home">
        EGATOR
      </a>
      <ul className="footer_list">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiance">Experiance</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonails">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_social">
        <a
          href="https://www.facebook.com/elsayed.rapy.7/"
          target="_blank"
          className="footer_icon"
        >
          <BsFacebook />
        </a>
        <a
          href="https://twitter.com/ElsayedRapaa"
          target="_blank"
          className="footer_icon"
        >
          <AiFillTwitterCircle />
        </a>
        <a
          href="https://www.instagram.com/elsayed_rapaa/"
          target="_blank"
          className="footer_icon"
        >
          <RiInstagramFill />
        </a>
      </div>
      <div className="copy">&copy; EGATOR Tutorials. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
