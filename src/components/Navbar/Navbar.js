import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-0 fixed-top mono-font">
      <Link className="navbar-brand text" to="/">Dmitri K. So</Link>

      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <section className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <Link className="nav-link" to="/about"><i className="fa fa-arrows-alt p-1 text-warning" aria-hidden="true"></i>About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/depository"><i className="fa fa-th p-1 text-warning" aria-hidden="true"></i>Depository</Link>
          </li>
        </ul>
      </section> */}
    </nav>
  );
}

export default Navbar;
