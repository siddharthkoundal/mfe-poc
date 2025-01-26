import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/header.css";

function Header() {
  const location = useLocation();

  return (
    <div className="header">
      <Link to="/" className="logo">
        My Portfolio
      </Link>
      <div className="header-right">
        <Link className={location.pathname === "/" ? "active" : ""} to="/">
          Home
        </Link>
        <Link
          className={location.pathname === "/about" ? "active" : ""}
          to="/about"
        >
          About
        </Link>
        <Link
          className={location.pathname === "/education" ? "active" : ""}
          to="/education"
        >
          Education
        </Link>
        <Link
          className={location.pathname === "/experience" ? "active" : ""}
          to="/experience"
        >
          Experience
        </Link>
        <Link
          className={location.pathname === "/contact" ? "active" : ""}
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
