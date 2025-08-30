import axios from "axios";
import { useState, useEffect } from "react";

export default function AxiosDemo() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:4000/getusers")
      .then(response => {
        setUsers(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []); // run only once

  return (
    <div className="container-fluid">
      <h2>Users</h2>
      <ol>
        {users.map(user => (
          <li key={user.userId}>{user.userId}</li>
        ))}
      </ol>
    </div>
  );
}
