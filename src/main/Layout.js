import React from "react";

import "./Layout.css";
import LayoutNavigation from "./LayoutNavigation";
import friend from "../friend.png";
import documents from "../documents.png";

const Layout = props => {
  return (
    <div>
      <div class="app-layout">
        <div class="teams"></div>
        <div class="channels">
          <div className="nav-btn">
            <div class="container-1">
              <button>
                <img src={documents} alt="doc" className="doc-icon" />
                Documents
              </button>
            </div>
            <div class="container-1">
              <button>
                <img src={friend} alt="friend" className="friend-icon" />
                Friends
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
