import React, { Component } from "react";

class List extends Component {
  state = { resources: [] };

  fetchRequest() {
    const url = `https://jsonplaceholder.typicode.com/${this.props.resource}`;
    const promise = fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ resources: data })
    );
  };

  componentDidMount() {
    this.fetchRequest();
  };

  componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) {
      this.fetchRequest();
    };
  };

  render() {
    return (
      <div className="resources">
        <ol>{this.state.resources.map((resource) => <li>{resource.title} </li>)}</ol>
      </div>
    );
  };
};

export default List;
