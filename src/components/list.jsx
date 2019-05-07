// Class-based components
// import React, { Component } from "react";

// class List extends Component {
//   state = { resources: [] };

//   fetchRequest() {
//     const url = `https://jsonplaceholder.typicode.com/${this.props.resource}`;
//     const promise = fetch(url)
//       .then(response => response.json())
//       .then(data => this.setState({ resources: data })
//     );
//   };

//   componentDidMount() {
//     this.fetchRequest();
//   };

//   componentDidUpdate(prevProps) {
//     if (prevProps.resource !== this.props.resource) {
//       this.fetchRequest();
//     };
//   };

//   render() {
//     return (
//       <div className="resources">
//         <ol>{this.state.resources.map((resource) => <li>{resource.title} </li>)}</ol>
//       </div>
//     );
//   };
// };

// export default List;

// Function-based components - using hooks
import React, { useState, useEffect } from "react";

const List = ({ resource }) => {
  const [resources, setResource] = useState([]);

  const fetchResources = () => {
    const url = `https://jsonplaceholder.typicode.com/${resource}`;
    const promise = fetch(url)
      .then(response => response.json())
      .then(data => setResource(data)
    );
  };

  // Refactoring to a useEffect hook:
  // 1. The function (i.e. fetchResources) will be rendered if the element inside [] is different in the previous state
  // 2. If [] is not included, then the function will be rendered every time
  // 3. useEffect essentially combines componentDidMount and componentDidUpdate
  useEffect(() => {
    fetchResources(resource)}, [resource]
  );

  return (
    <div className="resources">
      <ul>{resources.map(resource => <li key={resource.id}>{resource.title}</li>)}</ul>
    </div>
  );
};

export default List;
