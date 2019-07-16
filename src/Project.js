import React from "react";
import develop from "./img/develop.svg";
import "./Project.css";

function Project() {
  return (
    <div className="project-card">
      <div className="image-container">
        <img src="img/albretch-group-logo.png" className="img-responsive" alt="Logo" />
      </div>

      <div className="info-container">
        <p className="name">
          <span>The Albrecht Group</span> <span>Career site</span>
        </p>

        <div className="link-container">
          <a href="#" title="https://www.agroupnc.com/" target="_blank">
            https://www.agroupnc.com/
          </a>
        </div>

        <div className="stack-container">
          <div className="stack">
            <img src="img/icon-html5.png" className="img-responsive" alt="Logo" />
          </div>
          <div className="stack">
            <img src="img/icon-css3.png" className="img-responsive" alt="Logo" />
          </div>
          <div className="stack">
            <img src="img/icon-bootstrap.png" className="img-responsive" alt="Logo" />
          </div>
          <div className="stack">
            <img src="img/icon-sass.png" className="img-responsive" alt="Logo" />
          </div>
          <div className="stack">
            <img src="img/icon-photoshop.png" className="img-responsive" alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
