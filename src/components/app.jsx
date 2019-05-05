import React, { Component } from "react";

class App extends Component {
  state = { resource: "posts" };

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={() => this.setState({ resource: "posts" })}>Posts</button>
        <button className="btn btn-primary" onClick={() => this.setState({ resource: "tasks" })}>Tasks</button>
        <div className="resources">{this.state.resource}</div>
      </div>
    );
  };
};

export default App;
