import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../FormElements/button';

import '../../../css/nav-links.css';
import { AuthContext } from "../../context/auth-context";

const NavLinks = props => {
  const auth = useContext(AuthContext);
  const logout = () => auth.logout();

  return (
    <ul className="nav-links">
      <li><NavLink to="/" exact>Home</NavLink></li>
      <li><NavLink to="/users">All Users</NavLink></li>
      {auth.isLoggedIn && <li><NavLink to="/u2/places">My Places</NavLink></li>}
      <li><NavLink to="/places" exact>All Places</NavLink></li>
      {auth.isLoggedIn && <li><NavLink to="/places/new">Add a Place</NavLink></li>}
      {auth.isLoggedIn ? 
        <li><NavLink to="/auth" onClick={logout}>Logout</NavLink></li> :
        <li><NavLink to="/auth">Login/Signup</NavLink></li>
      }
    </ul>
  );
}

export default NavLinks;