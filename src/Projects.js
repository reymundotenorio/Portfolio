import React from "react";
import Data from "./projectsAPI";
import Project from "./Project";

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
          return (
            <Project
              key={`project_${item.id}`}
              id={item.id}
              name={item.name}
              type={item.type}
              url={item.url}
              logo={item.logo}
              stacks={item.stacks}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default Projects;
