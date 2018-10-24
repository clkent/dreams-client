import React from 'react';
import { connect } from 'react-redux';

import DashNavigation from '../_components/dashNavigation.component';

import PostForm from '../_components/postForm.component';
import Calendar from '../_components/calendar.component';

import DockNav from '../_components/dockNav.component';

import Media from 'react-media';

class Dashboard extends React.Component {
  render() {
    //if viewPostForm is true than display the post form - on close (inside PostForm) it sets viewPostForm back to false
    let viewPostForm;
    if (this.props.viewPostForm) {
      viewPostForm = <PostForm />;
    }

    //if viewCalendar is true than display the calendar - on close (inside calendar) it sets viewCalendar back to false
    let viewCalendar;
    if (this.props.viewCalendar) {
      viewCalendar = <Calendar />;
    }
    return (
      <div className="dashboard">
        <DashNavigation />
        <div className="dashboard-container">
          <Media query="(max-width: 1024px)">
            {matches =>
              matches ? (
                <React.Fragment>
                  {viewPostForm}
                  {viewCalendar}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {viewCalendar}
                  {viewPostForm}
                </React.Fragment>
              )
            }
          </Media>
        </div>
        <DockNav />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  viewCalendar: state.dashboard.viewCalendar,
  viewPostForm: state.dashboard.viewPostForm
});

export default connect(mapStateToProps)(Dashboard);
