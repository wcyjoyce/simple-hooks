// Class-based components
// import React, { Component } from "react";

// class App extends Component {
//   state = { resource: "posts" };

//   render() {
//     return (
//       <div>
//         <button className="btn btn-primary" onClick={() => this.setState({ resource: "posts" })}>Posts</button>
//         <button className="btn btn-primary" onClick={() => this.setState({ resource: "tasks" })}>Tasks</button>
//         <div className="resources">{this.state.resource}</div>
//       </div>
//     );
//   };
// };

// export default App;

// Function-based components
import React, { useState } from "react";

const App = () => {
  // Refactoring to a hook:
  // 1. resource === this.set.resource
  // 2. setResource === this.setState({ resource })
  // 3. useState === hook function from React
  // 4. "posts" === initial state (state = { "..." })
  const [resource, setResource] = useState("posts");

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setResource("posts")}>Posts</button>
      <button className="btn btn-primary" onClick={() => setResource("tasks")}>Tasks</button>
      <div className="resources">{resource}</div>
    </div>
  );
};

export default App;
