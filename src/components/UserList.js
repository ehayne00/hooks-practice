import React, { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  const addUser = user => setUsers(users => [user, ...users])

  const handleChange = e => setUser(e.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    //post request would go here .then
    addUser({
      name: user
    })
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <ul>

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={user} name="name"></input>
        <button type="submit">Submit</button>
      </form >

      {users.map((user) => (
        <p>{user.name}</p>
      ))}
    </ul>
  );
};

export default UserList;
