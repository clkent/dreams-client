import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink to="/" className="logo" activeClassName="is-active" exact={true}>
      Dream Recall
    </NavLink>
    <div className="eyes">
      <div className="eye" />
      <div className="eye" />
    </div>
    <NavLink to="/signup" activeClassName="is-active">
      Sign Up
    </NavLink>
    <NavLink to="/login" activeClassName="is-active">
      Log In
    </NavLink>
  </header>
);

export default Header;
