import React, { useState } from "react";
// File Css
import "./nav.css";
// React Icons
import { BiHome } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  const [active, setActive] = useState("#home");

  return (
    <div className="navbar">
      <a
        href="#home"
        onClick={() => setActive("#home")}
        className={active === "#home" ? "active" : ""}
      >
        <BiHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experiance"
        onClick={() => setActive("#experiance")}
        className={active === "#experiance" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActive("#services")}
        className={active === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActive("#portfolio")}
        className={active === "#portfolio" ? "active" : ""}
      >
        <BsBookmark />
      </a>
      <a
        href="#testimonials"
        onClick={() => setActive("#testimonials")}
        className={active === "#testimonials" ? "active" : ""}
      >
        <BiComment />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </div>
  );
};

export default Nav;
