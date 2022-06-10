import React from "react";
// File Css
import "./services.css";
// React Icons
import { BsCheck } from "react-icons/bs";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <div className="service_card">
          <h5>UI/UX Design</h5>
          <ul className="service_list">
            <li>
              <BsCheck className="service_icon" />
              Lorem ipsum dolor sit amet consectetur elit.
            </li>
            <li>
              <BsCheck className="service_icon" />
              Lorem ipsum dolor sit amet consectetur elit.
            </li>
            <li>
              <BsCheck className="service_icon" />
              Lorem ipsum dolor sit amet consectetur elit.
            </li>
            <li>
              <BsCheck className="service_icon" />
              Lorem ipsum dolor sit amet consectetur elit.
            </li>
            <li>
              <BsCheck className="service_icon" />
              Lorem ipsum dolor sit amet consectetur elit.
            </li>
            <li>
              <BsCheck className="service_icon" />
              Lorem ipsum dolor sit amet consectetur elit.
            </li>
          </ul>
        </div>
        <div className="service_card">
          <h5>Web Development</h5>
          <ul className="service_list">
            <li>
              <BsCheck className="service_icon" />
              Lorem ipsum dolor sit amet consectetur elit.
            </li>
            <li>
              <BsCheck className="service_icon" />
              Lorem ipsum dolor sit amet consectetur elit.
            </li>
            <li>
              <BsCheck className="service_icon" />
              Lorem ipsum dolor sit amet consectetur elit.
            </li>
            <li>
              <BsCheck className="service_icon" />
              Lorem ipsum dolor sit amet consectetur elit.
            </li>
            <li>
              <BsCheck className="service_icon" />
              Lorem ipsum dolor sit amet consectetur elit.
            </li>
            <li>
              <BsCheck className="service_icon" />
              Lorem ipsum dolor sit amet consectetur elit.
            </li>
            <li>
              <BsCheck className="service_icon" />
              Lorem ipsum dolor sit amet consectetur elit.
            </li>
          </ul>
        </div>
        <div className="service_card">
          <h5>Content Coreation</h5>
          <ul className="service_list">
            <li>
              <BsCheck className="service_icon" />
              Lorem ipsum dolor sit amet consectetur elit.
            </li>
            <li>
              <BsCheck className="service_icon" />
              Lorem ipsum dolor sit amet consectetur elit.
            </li>
            <li>
              <BsCheck className="service_icon" />
              Lorem ipsum dolor sit amet consectetur elit.
            </li>
            <li>
              <BsCheck className="service_icon" />
              Lorem ipsum dolor sit amet consectetur elit.
            </li>
            <li>
              <BsCheck className="service_icon" />
              Lorem ipsum dolor sit amet consectetur elit.
            </li>
            <li>
              <BsCheck className="service_icon" />
              Lorem ipsum dolor sit amet consectetur elit.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
