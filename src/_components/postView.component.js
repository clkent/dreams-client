import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import Draggable from 'react-draggable';

import { setCurrentPost, deletePost } from '../_actions/post.action';

import Media from 'react-media';
//TODO: swap out when css is in correct folder
import '../css/dockNav.css';
class ViewPost extends React.Component {
  render() {
    //setting up post variable to use in my return
    const { post } = this.props;

    return (
      <React.Fragment>
        <Media query="(max-width: 1024px)">
          {matches =>
            matches ? (
              <div className="view-post-container small">
                <div className="view-post">
                  {/* on click change my postId to null - this removes the post from view */}
                  <div className="handle">
                    <button
                      className="close-btn"
                      onClick={() => this.props.dispatch(setCurrentPost(null))}
                    >
                      <img alt="close button" src={require('../imgs/x.png')} />
                    </button>
                  </div>
                  <div className="content">
                    <span>{moment(post.createdAt).format('MMM Do YYYY')}</span>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                  </div>
                  <button
                    className="secondary-btn"
                    onClick={() => this.props.dispatch(deletePost(post.id))}
                  >
                    Delete
                  </button>
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
                <div className="view-post-container">
                  <div className="view-post">
                    {/* on click change my postId to null - this removes the post from view */}
                    <div className="handle">
                      <button
                        className="close-btn"
                        onClick={() =>
                          this.props.dispatch(setCurrentPost(null))
                        }
                      >
                        <img
                          alt="close button"
                          src={require('../imgs/x.png')}
                        />
                      </button>
                    </div>
                    <div className="content">
                      <span>
                        {moment(post.createdAt).format('MMM Do YYYY')}
                      </span>
                      <h1>{post.title}</h1>
                      <p>{post.content}</p>
                    </div>
                    <button
                      className="secondary-btn"
                      onClick={() => this.props.dispatch(deletePost(post.id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </Draggable>
            )
          }
        </Media>
      </React.Fragment>
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
