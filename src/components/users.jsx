import React, { Component } from "react";
import useResources from "./useResources.jsx";

const Users = () => {
  const users = useResources("users");

  return (
    <div className="users">
      <h2>Users</h2>
      <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  )
}

export default Users;
