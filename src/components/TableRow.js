import React from "react";
import { Link } from "react-router-dom";
import "./Table.css";

function TableRow({ user }) {
  const styleLinks = {
    color: "#1A1A1A",
    textDecoration: "none",
  };

  console.log(user);
  return (
    <div>
      <Link to={`/users/${user.id}`} style={styleLinks}>
        <div className="table__row">
          <div>{user.id}</div>
          <div>{user.name}</div>
          <div>Last name</div>
          <div>{user.email}</div>
          <div>Gender</div>
          <div>IP address</div>
          <div>Total clicks</div>
          <div>Total page views</div>
        </div>
      </Link>
    </div>
  );
}

export default TableRow;
