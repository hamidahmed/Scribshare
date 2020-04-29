import React from "react";

import "./MainPage.css";
import MainNavigation from "./MainNavigation";
import styles from "./MainPage.css";
import write from "../../write.png";
import screen from "../../screen.png";
import chat from "../../chat.png";
const MainPage = props => {
  return (
    <body>
      <MainNavigation />

      <h2>Collaborate with others while sharing and creating documents</h2>
      <div class="row">
        <div class="column">
          <img className="write-icon" src={write} alt="write" />
          <h4>Write word documents or sketch a drawing</h4>
        </div>
        <div class="column">
          <img className="screen-icon" src={screen} alt="screen" />
          <h3>Share and view documents and drawings with others live</h3>
        </div>
        <div class="column">
          <img className="chat-icon" src={chat} alt="chat" />
          <h5>Use the voice chat to communicate during it all</h5>
        </div>
      </div>
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
