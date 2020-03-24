import React from "react";

import MainPage from "./Navigation/MainPage";
import MainNavigation from "./Navigation/MainNavigation";
import "./Registerpage.css";
import { validators, VALIDATOR_EMAIL } from "../util/validator";
const Registerpage = props => {
  return (
    <div>
      <MainNavigation />
      <div className="wrapper">
        <div className="form-wrapper">
          <h2 className="h2-create">Create an account</h2>
          <form onSubmit="submit" noValidate>
            <div className="firstName">
              <label htmlFor="Username"></label>
              <input
                type="text"
                placeholder="Username"
                type="text"
                name="username"
              />
            </div>
            <div className="email">
              <label htmlFor="Email"></label>
              <input
                element="input"
                type="email"
                placeholder="Email"
                id="email"
                validators={[VALIDATOR_EMAIL()]}
                errorText="Please enter a valid email address."
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
            <div className="confirmPassword">
              <label htmlFor="confirmPassword"></label>
              <input
                type="text"
                placeholder="Confirm Password"
                type="password"
                name="confirmPassword"
              />
            </div>
            <div className="createAccount">
              <button type="submit">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Registerpage;
