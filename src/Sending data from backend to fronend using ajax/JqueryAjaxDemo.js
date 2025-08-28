import { useState, useEffect } from "react";
import $ from 'jquery';

export default function JqueryAjaxDemo() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    $.ajax({
      method: "GET",
      url: "http://127.0.0.1:4000/getusers",
      success: function (response) {
        setUsers(response);
      },
      error: function (err) {
        console.error("Fetch error:", err);
      }
    });
  }, []);

  return (
    <div className="container-fluid">
      <h2>User Details</h2>
      <ol>
        {users.map(user => (
          <li key={user._id}>
            {user.userId} - {user.UserName}
          </li>
        ))}
      </ol>
    </div>
  );
}
