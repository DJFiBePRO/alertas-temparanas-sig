import React from "react";
import Capa from "./Capa";
import Capa2 from "./Capa2";
import Capas from "./Capas";

//import Shapefile from "./Shapefile.js";
//import zipUrl from "./";

import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  return (
    <div className="form-group">
      <MapContainer center={{ lat: -42.87936, lng: 147.32941 }} zoom={7}>
        <TileLayer    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Capas />
      </MapContainer>
    </div>
  );
};

export default MapView;
