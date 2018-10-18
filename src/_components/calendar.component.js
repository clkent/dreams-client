import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../_actions/post.action';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment Object to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

class Calendar extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const style = {
      width: '800px',
      height: '400px',
      background: 'grey',
      border: '1px solid black'
    };
    //TODO: keep working on calendar display
    //FIXME: there is an issue with viewing +# more or the actual day/week view
    return (
      <div style={style}>
        <BigCalendar
          selectable
          localizer={localizer}
          events={this.props.events}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={event => alert(event.title)}
        />
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
      title: post.title
    };
  });
  return {
    events: posts
  };
};

// const mapStateToProps = state => {
//   const postTitles = state.post.posts.map((post, index) => {
//     return <li key={index}>{post.title}</li>;
//   });
//   return {
//     title: postTitles
//   };
// };

export default connect(mapStateToProps)(Calendar);
