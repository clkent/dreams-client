import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      <img
        className="logo"
        alt="Dream logo"
        src={require('../imgs/logo.png')}
      />
    </NavLink>
    <NavLink to="/signup" activeClassName="is-active">
      Sign Up
    </NavLink>
    <NavLink to="/login" activeClassName="is-active">
      Log In
    </NavLink>
  </header>
);

export default Header;
