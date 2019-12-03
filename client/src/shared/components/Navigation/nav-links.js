import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../../css/nav-links.css';

const NavLinks = props => {
  return (
    <ul className="nav-links">
      <li><NavLink to="/" exact>Home</NavLink></li>
      <li><NavLink to="/users">All Users</NavLink></li>
      <li><NavLink to="/places/new">Add a Place</NavLink></li>
      <li><NavLink to="/auth">Authenticate</NavLink></li>
    </ul>
  );
}

export default NavLinks;