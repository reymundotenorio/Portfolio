import React from "react";
import "./Project.css";
import Stack from "./Stack";

class Project extends React.Component {
  render() {
    return (
      <div className="project-card">
        <div className="image-container">
          <img src={`/images/logos/${this.props.logo}`} className="img-responsive" alt={this.props.name} />
        </div>

        <div className="info-container">
          <p className="name">
            <span>{this.props.name}</span> <span className="type">{this.props.type}</span>
          </p>

          <div className="link-container">
            <a href={this.props.url} title={this.props.url} target="_blank" rel="noopener noreferrer">
              {this.props.url}
            </a>
          </div>

          <div className="stack-container">
            {this.props.stacks.map(stack => {
              return <Stack key={`stack_${stack}_${this.props.id}`} stack={stack} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
