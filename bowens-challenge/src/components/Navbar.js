import React from "react";

import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 justify-content-between">
      <a className="navbar-brand" href="/#">
        Martin's Movies
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">
              Pages
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">
              Movies & TV Shows
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#">
              Contact Us
            </a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
