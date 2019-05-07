import { useState, useEffect } from "react";

const useResources = (resource) => {
  const [resources, setResource] = useState([]);

  const fetchResources = () => {
    const url = `https://jsonplaceholder.typicode.com/${resource}`;
    const promise = fetch(url)
      .then(response => response.json())
      .then(data => setResource(data)
    );
  };

  useEffect(() => {
    fetchResources(resource)}, [resource]
  );

  return resources;
}

export default useResources;
