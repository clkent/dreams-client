import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts, setCurrentPost } from '../_actions/post.action';
import ViewPost from './postView.component';
import { viewCalendar, reRender } from '../_actions/dashboard.action';

import Draggable from 'react-draggable';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import Media from 'react-media';

import '../css/index.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment Object to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

class Calendar extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  //on select of event on calendar
  eventClicked(post) {
    this.props.dispatch(setCurrentPost(post.id));
  }

  componentDidUpdate() {
    if (this.props.reRender) {
      this.props.dispatch(fetchPosts());
      this.props.dispatch(reRender(false));
    }
  }

  render() {
    //TODO: make day view the only view available for mobile

    //if postId has a value than display the post - on close (inside ViewPost) it sets the postId back to null
    let viewPost;
    if (this.props.postId) {
      viewPost = <ViewPost />;
    }

    return (
      <React.Fragment>
        {/* render appropriate content based on media query */}
        <Media query="(max-width: 1024px)">
          {matches =>
            matches ? (
              <div className="calendar-container small">
                <div className="handle">
                  <button
                    className="close-btn"
                    onClick={() => this.props.dispatch(viewCalendar(false))} //this.props.dispatch(viewCalendar(false))
                  >
                    <img alt="close button" src={require('../imgs/x.png')} />
                  </button>
                  <h3>Calendar</h3>
                </div>
                <div className="calendar">
                  <BigCalendar
                    localizer={localizer}
                    events={this.props.events}
                    startAccessor="start"
                    endAccessor="end"
                    onSelectEvent={post => this.eventClicked(post)}
                    view="day"
                    views={['day']}
                    step={1440}
                    timeslots={1}
                  />
                </div>
              </div>
            ) : (
              <Draggable
                axis="both"
                handle=".handle"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                grid={[1, 1]}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
                bounds="parent"
              >
                <div className="calendar-container">
                  <div className="handle">
                    <button
                      className="close-btn"
                      onClick={() => this.props.dispatch(viewCalendar(false))}
                    >
                      <img alt="close button" src={require('../imgs/x.png')} />
                    </button>
                    <h3>Calendar</h3>
                  </div>
                  <div className="calendar">
                    <BigCalendar
                      localizer={localizer}
                      events={this.props.events}
                      startAccessor="start"
                      endAccessor="end"
                      onSelectEvent={post => this.eventClicked(post)}
                      views={['month', 'day']}
                      step={1440}
                      timeslots={1}
                    />
                  </div>
                </div>
              </Draggable>
            )
          }
        </Media>
        {viewPost}
      </React.Fragment>
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
    postId: state.post.postId,
    viewCalendar: state.dashboard.viewCalendar,
    reRender: state.dashboard.reRender
  };
};

export default connect(mapStateToProps)(Calendar);
