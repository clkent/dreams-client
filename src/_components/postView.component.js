import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { setCurrentPost, deletePost } from '../_actions/post.action';

class ViewPost extends React.Component {
  render() {
    //TODO: remove styling here
    const style = {
      width: '800px',
      height: '400px',
      background: 'grey',
      border: '1px solid black'
    };

    //setting up post variable to use in my return
    const { post } = this.props;

    return (
      <div style={style}>
        {/* on click change my postId to null - this removes the post from view */}
        <button onClick={() => this.props.dispatch(setCurrentPost(null))}>
          Close
        </button>
        <div>
          <span>{moment(post.createdAt).format('MMM Do YYYY')}</span>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
        <button onClick={() => this.props.dispatch(deletePost(post.id))}>
          Delete
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //post is equal to an individual post based on the postId
  const postId = state.post.postId;
  const post = postId ? state.post.posts.find(x => x.id === postId) : null;
  return {
    post: post
  };
};

export default connect(mapStateToProps)(ViewPost);
