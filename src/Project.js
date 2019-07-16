import React from "react";
import develop from "./img/develop.svg";
import "./Project.css";

function Project() {
  return (
    <div className="project-card">
      <div className="image-container">
        <img src={this.props.logo} className="img-responsive" alt={this.props.name} />
      </div>

      <div className="info-container">
        <p className="name">
          <span>{this.props.name}</span> <span>Career site</span>
        </p>

        <div className="link-container">
          <a href={this.props.url} title={this.props.url} target="_blank">
          {this.props.url}
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
