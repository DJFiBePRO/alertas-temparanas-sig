import React, { Component } from "react";
import { Link } from "react-router-dom";
import Inicio from "../Inicio";
import Login from "../Login";
import SidebarMap from "../SidebarMap";

//import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <>
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
          Alertas
          </a>
          <SidebarMap/>
          <Login/>
        </div>
      </nav>
      </div>
      </>
    );
  }
}
