import React from "react";
import "./Project.css";

class Project extends React.Component {
  render() {
    return (
      <div className="project-card">
        <div className="image-container">
          <img src={`/images/${this.props.logo}`} className="img-responsive" alt={this.props.name} />
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
              <img src="/images/icon-html5.png" className="img-responsive" alt="Logo" />
            </div>
            <div className="stack">
              <img src="/images/icon-css3.png" className="img-responsive" alt="Logo" />
            </div>
            <div className="stack">
              <img src="/images/icon-bootstrap.png" className="img-responsive" alt="Logo" />
            </div>
            <div className="stack">
              <img src="/images/icon-sass.png" className="img-responsive" alt="Logo" />
            </div>
            <div className="stack">
              <img src="/images/icon-photoshop.png" className="img-responsive" alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
