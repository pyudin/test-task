import React, { useEffect, useState } from "react";
import "../styles/App.css";
import "../styles/Users.css";
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
  const [pages, setPages] = useState([1, 2, 3, 4, 5]);

  const MAX_PAGE = 20;

  const rightArrowHandler = () => {
    if (pages[4] >= MAX_PAGE) return;
    setPages(pages.map((it) => it + 1));
  };

  const leftArrowHandler = () => {
    if (pages[0] <= 1) return;
    setPages(pages.map((it) => it - 1));
  };

  useEffect(() => {
    if (page === pages[4] && page < MAX_PAGE)
      setPages(pages.map((it) => it + 1));
    if (page === pages[0] && page > 1) setPages(pages.map((it) => it - 1));
  }, [page]);

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
            <i
              className={`arrow left ${
                pages[0] === 1 ? "arrow__disabled" : ""
              }`}
              onClick={leftArrowHandler}
            ></i>

            {pages.map((el) => (
              <Link to={`/users`}>
                <button
                  key={el}
                  className={`button__page ${page === el ? "active" : ""}`}
                  onClick={() => {
                    setPage(el);
                    window.scrollTo(0, 0);
                  }}
                >
                  {el}
                </button>
              </Link>
            ))}

            <i
              className={`arrow right ${
                pages[4] === 20 ? "arrow__disabled" : ""
              }`}
              // onClick={() => setPage(page + 1)}
              onClick={rightArrowHandler}
            ></i>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Users;
