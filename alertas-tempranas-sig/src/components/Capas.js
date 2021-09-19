import React, { useEffect, Component } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
import Capa from "./Capa";

export const Capas = () => {
  const map = useMap();
  const myFunction = () => {    
    var isChecked = document.getElementById("flexCheckDefault").checked;
    if (isChecked) {
      alert("checkbox esta seleccionado");
    }
  };
  useEffect(() => {
    const sidebar = L.control
      .sidebar({
        autopan: false, // whether to maintain the centered map point when opening the sidebar
        closeButton: true, // whether t add a close button to the panes
        container: "sidebar", // the DOM container or #ID of a predefined sidebar container that should be used
        position: "left", // left or right
      })
      .addTo(map);
    const panelContent = {
      id: "userinfo", // UID, used to access the panel
      tab: '<i class="fa fa-bars"></i>', // content can be passed as HTML string,
      title: "<h1>CAPAS</h1>", // an optional pane header
      position: "top", // optional vertical alignment, defaults to 'top'
      pane: `
      
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="flexCheckDefault" onChange={this.myFunction} />  
        <label className="form-check-label" htmlFor="flexCheckDefault">CAPA 1 </label>
      </div>
      <div className="form-check"> 
        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked/>
        <label className="form-check-label" htmlFor="flexCheckChecked">CAPA 2</label>
      </div>
      `,
    };

    sidebar.addPanel(panelContent);
    sidebar.addPanel({
      id: "ghlink",
      tab: '<i class="fa fa-home"></i>',
    });
    sidebar.addPanel({
      id: "click",
      tab: '<i class="fa fa-info"></i>',
      //button: function (event) { console.log(event); }
    });
    //sidebar.removePanel("userinfo");
  }, []);

  return null;
};

export default Capas;
