import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Statistics.css";
import { Link } from "react-router-dom";
import Chart from "chart.js";

const styleLinks = {
  textDecoration: "none",
  color: "#cccccc",
};

function Statistics({ match }) {
  const [user, setUser] = useState({});

  const fetchUser = async (page = 1) => {
    const data = await fetch(`/api/users/${match.params.id}`);
    const userdata = await data.json();

    setUser(userdata);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    let ctx = document.getElementById("myChart");
    let myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: user.data_date,
        datasets: [
          {
            label: "# of Clicks",
            data: user.data_clicks,
            backgroundColor: "rgba(220,220,220,0)",
            borderColor: "#3a80ba",
            fill: "origin",
            pointBorderWidth: 0,
            borderWidth: 4,
          },
        ],
      },
      options: {
        elements: {
          line: {
            fill: false,
          },
        },
        tooltips: {
          mode: "nearest",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                stepSize: 200,
                beginAtZero: true,
              },
            },
          ],
          xAxes: [
            {
              display: false,
            },
          ],
        },
      },
    });

    let ctx2 = document.getElementById("myChart2");
    let myChart2 = new Chart(ctx2, {
      type: "line",
      data: {
        labels: user.data_date,
        datasets: [
          {
            label: "# of Page views",
            data: user.data_page_views,
            backgroundColor: "rgba(220,220,220,0)",
            borderColor: "#3a80ba",
            fill: "origin",
            pointBorderWidth: 0,
            borderWidth: 4,
          },
        ],
      },
      options: {
        elements: {
          line: {
            fill: false,
          },
        },
        tooltips: {
          mode: "nearest",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                stepSize: 200,
                beginAtZero: true,
              },
            },
          ],
          xAxes: [
            {
              display: false,
            },
          ],
        },
      },
    });
  }, [user]);

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
          <div className="table__subtitle">Clicks</div>
          <canvas id="myChart" width="400px" height="100px"></canvas>
          <div className="table__subtitle">Views</div>
          <canvas id="myChart2" width="400px" height="100px"></canvas>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Statistics;
