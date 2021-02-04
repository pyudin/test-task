import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <div className="main__header">
        <div className="container">
          <div className="header__title">AppCo</div>
        </div>

        <div>Brainstorming for desired perfect Usability</div>
        <div>
          Our design projects are fresh and simple and will benefit your
          business greatly. Learn more about our work!
        </div>
        <Link to="/users">
          <button>Views Stats</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
