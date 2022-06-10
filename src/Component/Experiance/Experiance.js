import React from "react";
// File Css
import "./experiance.css";
// The Data Progress Lang
import { data } from "./Data";
// React Icons
import { BsPatchCheckFill } from "react-icons/bs";

const Experiance = () => {
  return (
    <section id="experiance">
      <h5>What Skills I Have</h5>
      <h2>My Experiance</h2>
      <div className="container experiance_container">
        <div className="skills">
          {data.map((prog) => (
            <div className="skill" key={prog.id}>
              <h5>
                <span>
                  <span>{prog.lang}</span>{" "}
                  <BsPatchCheckFill className="skill_icon" />
                </span>{" "}
                <span>{prog.progress}</span>
              </h5>
              <div className="progress">
                <span style={{ width: prog.progress }}></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiance;
