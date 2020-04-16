import React, { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  const addUser = (user) => setUsers((users) => [...users, user]);

  const handleChange = (e) => setName(e.target.value)

  const handleInput = (e) => {
      e.preventDefault()
    addUser({
      user: {name: e.target.value}
    });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <ul>
      <form onSubmit={handleInput}>
        <input onChange={handleChange} value={name} name="name"></input>
        <button type="submit">Submit</button>
        </form >
      {users.map((user) => (
        <p>{user.name}</p>
      ))}
    </ul>
  );
};

export default UserList;
