import React, { useEffect, useState } from "react";
import "./Table.css";
import TableRow from "./TableRow";
import axios from "axios";

function Table() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async (page = 1) => {
    const data = await fetch(`http://localhost:8090/users?page=${page}`);
    const usersdata = await data.json();
    // axios(`http://localhost:8090/users?page=${page}`).then((data) =>
    //   console.log(data)http://jsonplaceholder.typicode.com/users
    // );
    console.log(usersdata);
    setUsers(usersdata);
  };

  return (
    <div>
      <div className="table">
        <div className="table__header">
          <div>Id</div>
          <div>First Name</div>
          <div>Last name</div>
          <div>Email</div>
          <div>Gender</div>
          <div>IP address</div>
          <div>Total clicks</div>
          <div>Total page views</div>
        </div>
        {users.map((user) => (
          <TableRow user={user} />
        ))}
      </div>
    </div>
  );
}

export default Table;
