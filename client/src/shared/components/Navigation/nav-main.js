import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../../css/nav-main.css";
import NavLinks from "./nav-links";
import SideDrawer from "./side-drawer";
import BackDrop from "../UIElements/back-drop";

const MainNavigation = () => {
  const [drawerIsOpen, setOpenDrawer] = useState(false);

  const openDrawer = () => setOpenDrawer(true);
  const closeDrawer = () => setOpenDrawer(false);

  return (
    <React.Fragment>
      {drawerIsOpen && <BackDrop onClick={closeDrawer} />}
      <SideDrawer show={drawerIsOpen}>
        <nav className="nav-drawer" onClick={closeDrawer}>
          <NavLinks />
        </nav>
      </SideDrawer>
      <header className="nav-header">
        <button className="nav-menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="nav-title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="nav-detail">
          <NavLinks />
        </nav>
      </header>
    </React.Fragment>
  );
};

export default MainNavigation;
