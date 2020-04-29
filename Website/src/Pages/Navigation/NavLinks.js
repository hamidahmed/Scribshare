import React from "react";
import "./Navlinks.css";
import { NavLink } from "react-router-dom";

const NavLinks = props => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/Community">Community</NavLink>
      </li>
      <li>
        <NavLink to="/Download">Download</NavLink>
      </li>
      <li>
        <NavLink to="/Login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/Signup">Signup</NavLink>
      </li>
    </ul>
  );
};
export default NavLinks;
