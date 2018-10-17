import React from 'react';
import { NavLink } from 'react-router-dom';

const DockNav = props => {
  return (
    <header>
      <NavLink to="/dashboard/post">Post</NavLink> <br />
      <NavLink to="/dashboard/calendar">Calendar</NavLink>
    </header>
  );
};

export default DockNav;
