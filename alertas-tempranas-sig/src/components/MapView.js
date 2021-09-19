import React from "react";

import SidebarMap from "./SidebarMap"
import Capa from "./Capa";
import Capa2 from "./Capa2";
import Capas from "./Capas";
import Conjunto from "./Conjunto";

//import Shapefile from "./Shapefile.js";
//import zipUrl from "./";


import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";



const MapView = () => {
  return (
    <div className="form-group">
      <Conjunto/>
    </div>
  );
};

export default MapView;
