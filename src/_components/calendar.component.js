import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../_actions/post.action';

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

    return (
      <div style={style}>
        <ul>{this.props.title}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const postTitles = state.title.map((title, index) => {
    return <li key={index}>{title}</li>;
  });
  return {
    posts: postTitles
  };
};

export default connect(mapStateToProps)(Calendar);
