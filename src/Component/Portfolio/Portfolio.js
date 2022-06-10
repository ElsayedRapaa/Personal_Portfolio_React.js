import React from "react";
// File Css
import "./portfolio.css";
// Data Info My Portfolio
import { data } from "./Data";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map((item) => (
          <div className="portfolio_card" key={item.id}>
            <div className="portfolio_img">
              <img src={item.img} alt={item.title} />
            </div>
            <p>{item.title}</p>
            <div className="portfolio_links">
              <a href={item.github} target="_blank" className="btn">
                Github
              </a>
              <a href={item.demo} target="_blank" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
