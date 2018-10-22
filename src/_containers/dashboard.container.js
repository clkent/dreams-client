import React from 'react';
import { connect } from 'react-redux';

import DashHeader from '../_components/dashHeader.component';

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
        <DashHeader />
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

function mapStateToProps(state, props) {
  console.log('CURRENT STATE:');
  console.log(state);
  return {
    loggedIn: state.auth.currentUser !== null,
    viewCalendar: state.dashboard.viewCalendar,
    viewPostForm: state.dashboard.viewPostForm
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
