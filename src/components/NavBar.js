import React from "react";
import { NavLink } from "react-router-dom";
import "../style/navbar.scss";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <h1>S.E.T.V</h1>
        <h3>STONER.ENTERTAINMENT.TELEVESION</h3>
      </div>
      <div className="navbar-container">
      <div className="navbar-links">
        <NavLink className="navbar-link" exact to="/">
          HOME
        </NavLink>
        <NavLink className="navbar-link" to="/about">
          ABOUT
        </NavLink>
      </div>
      </div>
    </div>
  );
}
