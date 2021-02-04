import React from "react";
import "../App.css";
import "./Users.css";
import Table from "./Table";
import { Link } from "react-router-dom";

const styleLinks = {
  textDecoration: "none",
  color: "#cccccc",
};

function Users() {
  return (
    <div className="body__users">
      <div className="container">
        <div className="breadcrumbs">
          <span className="breadcrumbs-item">
            <Link to="/" style={styleLinks}>
              Home
            </Link>
          </span>
          <span className="breadcrumbs-item">
            <i className="arrow__bredcrumbs right "></i>
          </span>
          <span className="breadcrumbs-item active">User statistics</span>
        </div>
        <div className="table__title">User statistics</div>
        <Table />
        <div className="buttons">
          <i className="arrow left arrow__disabled"></i>

          <button className="button__page active">1</button>
          <button className="button__page inactive">2</button>
          <i className="arrow right "></i>
        </div>
      </div>
    </div>
  );
}

export default Users;
