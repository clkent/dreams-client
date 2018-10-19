import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import DashHeader from '../_components/dashHeader.component';

import PostForm from '../_components/postForm.component';
import Calendar from '../_components/calendar.component';

import DockNav from '../_components/dockNav.component';

class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <DashHeader />
        <h1>Dashboard</h1>
        <Switch>
          <Route path="/dashboard/post" component={PostForm} />
          <Route path="/dashboard/calendar" component={Calendar} />
        </Switch>
        <DockNav />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state, props) {
  console.log('CURRENT STATE:');
  console.log(state);
  return {
    //TODO: change state based on route clicks above
    loggedIn: state.auth.currentUser !== null,
    postFormOpen: true,
    calendarOpen: true
  };
}

//FIXME: when I no longer need my console.logs this is a cleaner way to write mapStateToProps
// const mapStateToProps = state => ({
//   loggedIn: state.auth.currentUser !== null,
//   newPostToggle: true,
//   calendarToggle: true,
//   postToggle: false
// });

export default connect(mapStateToProps)(Dashboard);
