import React from "react";
import { Link } from "react-router-dom";
import LayoutNavLinks from "./LayoutNavLinks";
import "./LayoutNavigation.css";
import LayoutHeader from "./LayoutHeader";
const LayoutNavigation = props => {
  return (
    <LayoutHeader>
      <h1 className="main-navigation__title">
        <Link to="/">ScribShare</Link>
      </h1>
      <nav className="main-navigation__header-nav ">
        <LayoutNavLinks />
      </nav>
    </LayoutHeader>
  );
};

export default LayoutNavigation;
