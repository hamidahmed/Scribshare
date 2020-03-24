import React from "react";
import logo from "./logo.svg";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Accountpage from "./Pages/Account/Accountpage";
import Users from "./Components/Users/Users";
import MainPage from "./Pages/Navigation/MainPage";
import Homepage from "./Pages/Homepage";
import Loginpage from "./Pages/Loginpage";
import Registerpage from "./Pages/Registerpage";
import Downloadpage from "./Pages/Downloadpage";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/Community" exact>
          <Homepage />
        </Route>
        <Route path="/Login" exact>
          <Loginpage />
        </Route>
        <Route path="/Signup" exact>
          <Registerpage />
        </Route>
        <Route path="/Download" exact>
          <Downloadpage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
