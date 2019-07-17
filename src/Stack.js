import React from "react";

class Stack extends React.Component {
  render() {
    return (
      <div className="stack">
        <img src={`/images/stacks/${this.props.stack}.png`} className="img-responsive" alt={this.props.stack} />
      </div>
    );
  }
}

export default Stack;
