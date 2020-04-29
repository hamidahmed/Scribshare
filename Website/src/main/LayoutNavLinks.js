import React from "react";
import "./LayoutNavLinks.css";
import { NavLink } from "react-router-dom";

const LayoutNavLinks = props => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/Chat">Chat</NavLink>
      </li>
      <li>
        <NavLink to="/SharedDocuments">ShareDocuments</NavLink>
      </li>
    </ul>
  );
};
export default LayoutNavLinks;
