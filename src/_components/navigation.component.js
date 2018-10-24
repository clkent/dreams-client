import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav role="navigation">
    <NavLink
      aria-label="Dream Recall logo and link to home page"
      to="/"
      className="logo"
      activeClassName="is-active"
      exact={true}
    >
      Dream Recall
    </NavLink>
    <div aria-label="Sleep eyes blinking animation" className="eyes">
      <div className="eye" />
      <div className="eye" />
    </div>
    <NavLink
      aria-label="link to sign up page"
      to="/signup"
      activeClassName="is-active"
    >
      Sign Up
    </NavLink>
    <NavLink
      aria-label="link to login page"
      to="/login"
      activeClassName="is-active"
    >
      Log In
    </NavLink>
  </nav>
);

export default Navigation;
