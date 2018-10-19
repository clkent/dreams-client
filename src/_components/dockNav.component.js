import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/dockNav.css';

const DockNav = props => {
  return (
    <nav className="dock-nav">
      <NavLink to="/dashboard/post">
        <img alt="make a new post" src={require('../imgs/notepad-icon.png')} />
      </NavLink>{' '}
      <br />
      <NavLink to="/dashboard/calendar">
        <img alt="open your calendar" src={require('../imgs/cal-icon.png')} />
        <span className="cal-date">30</span>
      </NavLink>
    </nav>
  );
};

export default DockNav;
