import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-geoserver-request/src/L.Geoserver.js";

function Capa() {
  const map = useMap();
  useEffect(() => {
    const Wms = L.Geoserver.wms("http://192.168.1.2:8080/geoserver/wms", {
      layers: `	topp:tasmania_water_bodies`,
    }).addTo(map);
    const Wms2 = L.Geoserver.wms("http://localhost:51035/geoserver/wms", {
      layers: `topp:tasmania_water_bodies`,
    }).addTo(map);
    const layerLegend=L.Geoserver.legend("http://192.168.1.2:8080/geoserver/wms", {
        layers: `topp:tasmania_water_bodies`,
      }).addTo(map);
    const layerLegend2=L.Geoserver.legend("http://localhost:51035/geoserver/wms", {
        layers: `topp:tasmania_water_bodies`,
      }).addTo(map);
  }, []);
  return null;
}

export default Capa;
