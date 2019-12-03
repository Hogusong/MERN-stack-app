import React from "react";
import { Link } from "react-router-dom";

import "../../../css/nav-main.css";
import NavLinks from "./nav-links";

const MainNavigation = () => {

  return (
    <header className="nav-header">
      <button className="nav-menu-btn">
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
  );
};

export default MainNavigation;
