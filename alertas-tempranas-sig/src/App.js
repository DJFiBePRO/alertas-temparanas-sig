import React, {useEffect} from "react";
import "./App.css";

import MapView from "./components/MapView";
import NavBar from "./components/NavBar/NavBar";
import Tabs from "./components/Tabs";
import Login from "./components/Login";
import Leyenda from "./components/Leyenda";

//import SidebarMap from "./components/SidebarMap";
//import Capa from "./components/Capa";

//const checkbox = document.getElementById("flexCheckDefault");
//var sidebar = L.control.sidebar('sidebar', {position: 'left'}).addTo(map);


/*useEffect(() => {
  let data =localStorage.getItem('user');
  if(data != null){
    return (
      <>
      <NavBar />
      <MapView/>
      </>
    );
  }else
  {
    return (
      <>
      <NavBar />
      <MapView/>
      </>
    );
  }
},[]);*/


export default function App() {
  
      return (
        <>
        <NavBar />
        <MapView/>
        </>
      ); 
}
