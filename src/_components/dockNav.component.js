import React from 'react';
import { connect } from 'react-redux';

import { viewCalendar, viewPostForm } from '../_actions/dashboard.action';
import '../css/dockNav.css';

const DockNav = props => {
  return (
    <nav className="dock-nav">
      <button onClick={() => props.dispatch(viewPostForm(!props.viewPostForm))}>
        <img alt="make a new post" src={require('../imgs/notepad-icon.png')} />
      </button>
      <button onClick={() => props.dispatch(viewCalendar(!props.viewCalendar))}>
        <span className="cal-date">30</span>
        <img alt="open your calendar" src={require('../imgs/cal-icon.png')} />
      </button>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    viewCalendar: state.dashboard.viewCalendar,
    viewPostForm: state.dashboard.viewPostForm
  };
};

export default connect(mapStateToProps)(DockNav);
