import React from "react";
import Capas from "./Capas.js";


const Tabs = () => {
  return (
    <>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="capas-tab"
            data-bs-toggle="tab"
            data-bs-target="#capas"
            type="button"
            role="tab"
            aria-controls="capas"
            aria-selected="true"
          >
            Capas
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="transparencia-tab"
            data-bs-toggle="tab"
            data-bs-target="#transparencia"
            type="button"
            role="tab"
            aria-controls="transparencia"
            aria-selected="false"
          >
            Transparencia
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="capas"
          role="tabpanel"
          aria-labelledby="capas-tab"
        >
          <Capas/>
        </div>
        <div
          class="tab-pane fade"
          id="transparencia"
          role="tabpanel"
          aria-labelledby="transparencia-tab"
        >
          Aquí la transparencia
        </div>
      </div>
    </>
  );
};

export default Tabs;
