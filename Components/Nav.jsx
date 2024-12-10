// Nav.jsx
import React from "react";
import '/Main/App.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import {Link} from "react-router-dom";


const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links d-flex list-unstyled justify-content-between align-items-center">
        <li className="nav-item me-4">
        <Link className="nav-link" to="/about"></Link>
          <a className="nav-link" href="#about"><i className="bi bi-person-circle"></i> About Me</a>
        </li>
        <li className="nav-item me-4">
        <Link className="nav-link" to="/portfolio"></Link>
         <a className="nav-link" href="#portfolio"><i className="bi bi-briefcase"></i> Portfolio</a>
        </li>
        <li className="nav-item me-4">
        <Link className="nav-link" to="/contact"></Link>
          <a className="nav-link" href="#contact"><i className="bi bi-envelope"></i> Contact</a>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/resume"></Link>
          <a className="nav-link" href="#resume"><i className="bi bi-file-earmark-text"></i> Resume</a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
