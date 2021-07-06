import React from "react";
import "./App.css";

import MapView from './components/MapView'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
    <Navbar/> 
    <Switch>
      <Route exact path="/mapa" component={MapView}/>
    </Switch>
    </Router>
  
  );
}
