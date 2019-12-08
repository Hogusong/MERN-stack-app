import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../../../css/nav-links.css';

const NavLinks = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const logout = () => setIsLoggedIn(false);
  return (
    <ul className="nav-links">
      <li><NavLink to="/" exact>Home</NavLink></li>
      <li><NavLink to="/users">All Users</NavLink></li>
      {isLoggedIn && <li><NavLink to="/u2/places">My Places</NavLink></li>}
      <li><NavLink to="/places">All Places</NavLink></li>
      {isLoggedIn && <li><NavLink to="/places/new">Add a Place</NavLink></li>}
      {isLoggedIn ? 
        <li><NavLink to="/" onClick={logout}>Logout</NavLink></li> :
        <li><NavLink to="/auth">Login/Signup</NavLink></li>
      }
    </ul>
  );
}

export default NavLinks;