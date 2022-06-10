import React from "react";
// File Css
import "./about.css";
// About Photo
import IMG from "../../Img/me-about.jpg";
// React Icons
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_img">
          <img src={IMG} alt="About Me Photo" />
        </div>
        <div className="about_content">
          <div className="about_works">
            <div>
              <FaAward className="about_icon" />
              <h5>Experiance</h5>
              <small>+3 Years Working</small>
            </div>
            <div>
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>+200 Worldwide</small>
            </div>
            <div>
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>+80 Completed</small>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nihil
            sunt fugiat perspiciatis optio cumque quis! Commodi ea nemo at ex
            nihil ratione vitae deleniti minus neque est! Quidem, laudantium.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
