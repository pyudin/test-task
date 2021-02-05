import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="main">
      <div className="main__header">
        <div className="container">
          <div className="header__title">AppCo</div>

          <div className="main__title">
            <b>Brainstorming</b> for desired perfect Usability
          </div>
          <div className="main__text">
            Our design projects are fresh and simple and will benefit your
            business greatly. Learn more about our work!
          </div>
          <Link to="/users">
            <button className="btn__stats">Views Stats</button>
          </Link>
        </div>
      </div>

      <div className="main__body">
        <div className="main__bodytitle">
          Why <b>small business owners love</b> AppCo?
        </div>
        <div className="main__bodytext">
          Our design projects are fresh and simple and will benefit your
          business greatly. Learn more about our work!
        </div>
        <div className="body__cards">
          <div className="body__card">
            <div className="card__image">
              <div className="card__pic1"></div>
            </div>
            <div className="card__title">Clean Design</div>
            <div className="card__text">
              Increase sales by showing true dynamics of your website.
            </div>
          </div>
          <div className="body__card">
            <div className="card__image">
              <div className="card__pic2"></div>
            </div>
            <div className="card__title">Secure Data</div>
            <div className="card__text">
              Build your online store’s trust using Social Proof & Urgency.
            </div>
          </div>
          <div className="body__card">
            <div className="card__image">
              <div className="card__pic3"></div>
            </div>
            <div className="card__title">Retina Ready</div>
            <div className="card__text">
              Realize importance of social proof in customer’s purchase
              decision.
            </div>
          </div>
        </div>
      </div>
      <div className="main__footer">
        <div className="container">
          <div className="footer__subdiv">
            <input
              type="text"
              className="footer__sub"
              placeholder="Enter your email"
            />
            <div className="sub__btn">
              <div>Subscribe</div>
            </div>
          </div>
          <div className="footer_main">
            <div className="container">
              <div className="footer__signs">
                <div className="footer_appco">AppCo</div>
                <div>All rights reserved by ThemeTags</div>
                <div>Copyrights Ⓒ 2019.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
