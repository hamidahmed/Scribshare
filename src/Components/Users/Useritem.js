import React from "react";
import { Link } from "react-router-dom";

import Avatar from "./Avatar";

import "../Users/Useritem.css";

const Useritem = props => {
  return (
    <li className="user-item">
      <div className="user-item__image">
        <Avatar image={props.image} alt={props.name} />
      </div>
      <div className="user-item__info">
        <h2>{props.name}</h2>
        <h3>
          {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
        </h3>
      </div>
    </li>
  );
};

export default Useritem;
