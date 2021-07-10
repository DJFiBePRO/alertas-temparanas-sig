import React from "react";
import "./App.css";

import MapView from "./components/MapView";
import NavBar from "./components/NavBar/NavBar";
import Tabs from "./components/Tabs";

export default function App() {
  return (
    <>
    <NavBar />
    <MapView/>
    </>
  );
}
