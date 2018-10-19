import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts, setCurrentPost } from '../_actions/post.action';
import ViewPost from './postView.component';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment Object to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

class Calendar extends React.Component {
  componentDidMount() {
    if (this.props.calendarToggle) {
      console.log(this.props.calendarToggle);
    }
    this.props.dispatch(fetchPosts());
  }

  //on select of event on calendar
  eventClicked(post) {
    this.props.dispatch(setCurrentPost(post.id));
  }

  render() {
    //TODO: remove styles here and move to css
    const style = {
      width: '800px',
      height: '400px',
      background: 'grey',
      border: '1px solid black'
    };

    //TODO: make day view the only view available for mobile
    //.rbc-timeslot-group & .rbc-label & .rbc-current-time-indicator display:none;

    //if postId has a value than display the post - on close (inside ViewPost) it sets the postId back to null
    let viewPost;
    if (this.props.postId) {
      viewPost = <ViewPost />;
    }

    return (
      <div style={style}>
        <BigCalendar
          selectable
          localizer={localizer}
          events={this.props.events}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={post => this.eventClicked(post)}
          views={['month', 'day']}
          step={1440}
          timeslots={1}
        />
        {viewPost}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const posts = state.post.posts.map(post => {
    return {
      id: post.id,
      start: post.createdAt,
      end: post.createdAt,
      title: post.title,
      content: post.content,
      allDay: true
    };
  });
  return {
    events: posts,
    postId: state.post.postId
  };
};

export default connect(mapStateToProps)(Calendar);
