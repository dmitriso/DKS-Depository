import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-0 fixed-top">
    <Link className="navbar-brand text" to="/DKS-Depository/">Dmitri K. So</Link>
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <section className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item ">
          <Link className="nav-link" to="/DKS-Depository/about"><i className="fa fa-user-o p-1 text-warning" aria-hidden="true"></i>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/DKS-Depository/depository"><i className="fa fa-archive p-1 text-warning" aria-hidden="true"></i>Depository</Link>
        </li>
      </ul>
    </section>
  </nav>
  );
}

export default Navbar;
