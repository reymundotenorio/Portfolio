import React from "react";
import "./Projects.css";
import Project from "./Project";
import Data from "./projectsAPI";

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: Data
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.state.data.map(item => {
          console.log(item);
          
          return (
            <Project key={item.id} name={item.name} url={item.url} stack={item.stack} logo={item.logo} />
          );
        })}
      </React.Fragment>
    );
  }
}

export default Projects;
