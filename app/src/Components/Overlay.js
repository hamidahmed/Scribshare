import React from "react";
import "../Styles/Overlay.css";
import Documents from "./Documents";
import HomePage from "./HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

class Overlay extends React.Component {
  render() {
    return (
      <div className="Overlay">
        <div id="wrapper">
          <div id="optionsTab">
            <div id="windowsCommands"></div>
          </div>
          <Router>
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
                <div id="taskView">
                  <Switch>
                    <Route exact path="/" component={withRouter(HomePage)} />
                    <Route
                      exact
                      path="/ScratchPad"
                      component={withRouter(Documents)}
                    />
                    <Route component={Error} />
                  </Switch>
                </div>
              </div>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default Overlay;
