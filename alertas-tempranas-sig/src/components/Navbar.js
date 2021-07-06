import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <nav className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          ALERTAS TEMPRANAS
        </NavLink>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink exact to="/mapa" className="nav-links">
              MAPA
            </NavLink>
          </li>
        </ul>
      </nav>
    </nav>
  );
}

export default Navbar;
