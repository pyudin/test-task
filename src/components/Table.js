import React, { useEffect, useState } from "react";
import "./Table.css";
import TableRow from "./TableRow";

function Table({ page }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const fetchUsers = async (page = 1) => {
    const data = await fetch(`http://localhost:8090/users?page=${page}`);
    const usersdata = await data.json();
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
          <TableRow user={user} key={user.id} className="trow" />
        ))}
      </div>
    </div>
  );
}

export default Table;
