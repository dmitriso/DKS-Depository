import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark p-0 fixed-top">
    <Link class="navbar-brand text" href="#" to="/">Dmitri K. So</Link>
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <section class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item ">
          <Link class="nav-link" to="/about"><i class="fa fa-user-o p-1 text-warning" aria-hidden="true"></i>About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"  to="/depository"><i class="fa fa-archive p-1 text-warning" aria-hidden="true"></i>Depository</Link>
        </li>
      </ul>
    </section>
  </nav>
  );
}

export default Navbar;
