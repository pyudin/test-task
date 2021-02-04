import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Statistics.css";
import { Link } from "react-router-dom";
import Chart from "chart.js";

const styleLinks = {
  textDecoration: "none",
  color: "#cccccc",
};

function Statistics({ match }) {
  const [user, setUser] = useState({});

  const fetchUser = async (page = 1) => {
    const data = await fetch(`http://localhost:8090/users/${match.params.id}`);
    const userdata = await data.json();
    console.log(userdata);
    setUser(userdata);
  };

  useEffect(() => {
    fetchUser();

    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3, 4, 20],

            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }, []);

  return (
    <div className="statistics">
      <Header />
      <div className="statistics_body">
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
            <span className="breadcrumbs-item">
              <Link to="/users" style={styleLinks}>
                User statistics
              </Link>
            </span>
            <span className="breadcrumbs-item">
              <i className="arrow__bredcrumbs right "></i>
            </span>
            <span className="breadcrumbs-item active">
              {user.first_name} {user.last_name}
            </span>
          </div>
          <div className="table__title">
            {user.first_name} {user.last_name}
          </div>

          <canvas id="myChart" width="400px" height="100px"></canvas>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Statistics;
