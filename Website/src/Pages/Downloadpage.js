import React, { useState } from "react";

import MainNavigation from "./Navigation/MainNavigation";
const Downloadpage = (props) => {
  return (
    <div>
      <MainNavigation />
      <h2>Downloads</h2>
      <a
        href="https://drive.google.com/uc?id=19e8B30jBAfLXNEiqe2P_gOR1okLAm1d7"
        download
      >
        <button onClick="Download()" class="download-btn">
          Download
        </button>
      </a>
    </div>
  );
};

export default Downloadpage;
