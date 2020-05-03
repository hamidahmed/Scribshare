import React from "react";
import "../Styles/Overlay.css";

class Overlay extends React.Component {
  render() {
    return (
      <div className="Overlay">
        <div id="wrapper">
          <div id="optionsTab">
            <div id="windowsCommands"></div>
          </div>
          <div id="sideBar">
            <div id="groups">
              <div id="logoButton"></div>
              <hr id="seperator" />
            </div>
            <div id="menus">
              <div id="Profile"></div>
              <hr id="seperator" />
              <div id="interactiveView"></div>
            </div>
            <div id="taskContainer">
              <div id="taskBar"></div>
              <div id="taskView"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Overlay;
