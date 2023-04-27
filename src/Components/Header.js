import React from "react";
import logo from "../Images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import {Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div className="fixed-top ">
      <nav className="navbar navbar-expand-lg    ">
        <div className="container-fluid ">
        <Link to="/" className="navbar-brand my-1" >
            <img src={logo} alt="beach logo" className="logo" />
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaAlignRight className="nav-icon " />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 ms-3 text-center">
              <li className="nav-item  ">
                <Link to="/" className="nav-link px-5 ">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/rooms" className="nav-link">
                  Rooms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
