import React from "react";

import MainPage from "./Navigation/MainPage";
import "./Loginpage.css";
import MainNavigation from "./Navigation/MainNavigation";
const Loginpage = (props) => {
  return (
    <div>
      <MainNavigation />
      <div className="wrapper">
        <div className="form-wrapper">
          <h2 className="h2-create">Login</h2>
          <form onSubmit="submit" noValidate>
            <div className="email">
              <label htmlFor="Email"></label>
              <input
                type="text"
                placeholder="Email or Username"
                type="text"
                name="email"
              />
            </div>
            <div className="Password">
              <label htmlFor="Password"></label>
              <input
                type="text"
                placeholder="Password"
                type="password"
                name="password"
              />
            </div>
            <div className="createAccount">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Loginpage;
