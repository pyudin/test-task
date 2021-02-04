import React, { useState } from "react";
import "../App.css";
import "./Users.css";
import Table from "./Table";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const styleLinks = {
  textDecoration: "none",
  color: "#cccccc",
};

function Users() {
  const [page, setPage] = useState(1);

  return (
    <div className="page__users">
      <Header />
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
          <Table page={page} />
          <div className="buttons">
            <i className="arrow left arrow__disabled"></i>

            <button className="button__page active" onClick={() => setPage(1)}>
              1
            </button>
            <button
              className="button__page inactive"
              onClick={() => setPage(2)}
            >
              2
            </button>
            <button
              className="button__page inactive"
              onClick={() => setPage(3)}
            >
              3
            </button>
            <i className="arrow right "></i>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Users;
