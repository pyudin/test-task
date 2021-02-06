import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TableRow({ user }) {
  // const [userdata, setUserdata] = useState({});
  const styleLinks = {
    color: "#1A1A1A",
    textDecoration: "none",
  };

  // useEffect(() => {
  //   fetchUser();
  // }, []);

  // const fetchUser = async () => {
  //   const data = await fetch(`http://localhost:8090/api/users/${user.id}`);
  //   const usersdata = await data.json();
  //   setUserdata(usersdata);
  // };

  return (
    <div className="trow">
      <Link to={`/users/${user.id}`} style={styleLinks}>
        <div className="table__row">
          <div>{user.id}</div>
          <div>{user.first_name}</div>
          <div>{user.last_name}</div>
          <div>{user.email}</div>
          <div>{user.gender}</div>
          <div>{user.ip_address}</div>
          <div>{user.total_clicks}</div>
          <div>{user.total_page_views}</div>
        </div>
      </Link>
    </div>
  );
}

export default TableRow;
