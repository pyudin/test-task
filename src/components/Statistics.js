import React, { useEffect } from "react";
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
  const fetchUser = async (page = 1) => {
    const data = await fetch(`http://localhost:8090/users/${match.params.id}`);
    const userdata = await data.json();
    console.log(userdata);
  };

  useEffect(() => {
    fetchUser();

    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
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
            <span className="breadcrumbs-item active">{match.params.id}</span>
          </div>
          <div className="table__title">{match.params.id}</div>

          <canvas id="myChart" width="400" height="400"></canvas>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Statistics;
