import React from "react";
import "./App.css";

import MapView from "./components/MapView";
import NavBar from "./components/NavBar/NavBar";
import Tabs from "./components/Tabs";

export default function App() {
  return (
    <>
      <NavBar />
      <div class="row">
        <div class="col-sm-2">
          <Tabs />
        </div>
        <div class="col-sm-10">
          <MapView />
        </div>
      </div>
    </>
  );
}
