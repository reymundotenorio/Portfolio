import React from "react";
import "./Stack.css";

class Stack extends React.Component {
  render() {
    return (
      <div className="stack">
        <img src={`/images/icons/${this.props.stack}.png`} className="img-responsive" alt={this.props.stack} />
      </div>
    );
  }
}

export default Stack;