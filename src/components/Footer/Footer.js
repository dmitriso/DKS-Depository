/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Footer.css";

function Footer() {
  return (
  
      <footer className="footer py-3 text-center mt-0 mono-font">
    <section className="container ">
      <span className="text-muted ">©Copyright 2020 Dmitri So</span>
      <a href="https://stackoverflow.com/users/14544394/dmitriso" target="_blank" rel="noreferrer"><i
          className="fa fa-stack-overflow p-2 text-warning" aria-hidden="true"></i></a>
      <a href="https://github.com/dmitriso" target="_blank" rel="noreferrer"><i className="fa fa-github p-2 text-warning" aria-hidden="true"></i></a>
      <a href="https://www.linkedin.com/in/dmitri-so-545b2167/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin p-2 text-warning"
          aria-hidden="true"></i></a>
    </section>
  </footer>
  );
}

export default Footer;
