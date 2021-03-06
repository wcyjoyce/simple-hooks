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
import useResources from "./useResources.jsx";

const List = ({ resource }) => {
  const resources = useResources(resource);

  // Refactored into useResources for greater usability:
    // const [resources, setResource] = useState([]);

    // const fetchResources = () => {
    //   const url = `https://jsonplaceholder.typicode.com/${resource}`;
    //   const promise = fetch(url)
    //     .then(response => response.json())
    //     .then(data => setResource(data)
    //   );
    // };
    // useEffect(() => {
    //   fetchResources(resource)}, [resource]
    // );

  return (
    <div className="resources">
      <ul>{resources.map(resource => <li key={resource.id}>{resource.title}</li>)}</ul>
    </div>
  );
};

export default List;
