import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import "./MainNavigation.css";

import NavLinks from "./NavLinks";
const MainNavigation = props => {
  return (
    <MainHeader>
      <h1 className="main-navigation__title">
        <Link to="/">ScribShare</Link>
      </h1>
      <nav className="main-navigation__header-nav ">
        <NavLinks />
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
