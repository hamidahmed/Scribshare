import React from "react";

import "./MainPage.css";
import MainNavigation from "./MainNavigation";
import styles from "./MainPage.css";
import write from "../../write.png";
import screen from "../../screen.png";
import chat from "../../chat.png";
const MainPage = (props) => {
  return (
    <body>
      <MainNavigation />

      <h2>Collaborate with others while sharing and creating documents</h2>
      <div class="row"></div>
      <div class="row">
        <button onClick="Download()" class="download-btn">
          Download
        </button>
        <button onClick="Download()" class="download-btn2">
          Continue to Browser
        </button>
      </div>
    </body>
  );
};

export default MainPage;
