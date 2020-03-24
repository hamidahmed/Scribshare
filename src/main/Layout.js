import React from "react";

import "./Layout.css";
import LayoutNavigation from "./LayoutNavigation";
const Layout = props => {
  return (
    <div>
      <LayoutNavigation />
      <div class="app-layout">
        <div class="teams">Groups</div>
        <div class="channels">Channels</div>
        <div class="users">Users</div>
      </div>
    </div>
  );
};
export default Layout;
