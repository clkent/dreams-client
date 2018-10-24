import React from 'react';
import { connect } from 'react-redux';

// import Draggable from './draggable.component';
import { Field, reduxForm, focus, reset } from 'redux-form';

import {
  // reducer as notifReducer,
  actions as notifActions
  // Notifs
} from 'redux-notifications';

import Draggable from 'react-draggable';

import Media from 'react-media';

import moment from 'moment';

import { reRender } from '../_actions/dashboard.action';
import { submitPostForm } from '../_actions/post.action';
import '../css/index.css';
import { viewPostForm } from '../_actions/dashboard.action';

export class PostForm extends React.Component {
  //on submit of my form I dispatch my submitPostForm from my post.action
  onSubmit(values) {
    const { title, content } = values;
    const post = { title, content };
    return this.props.dispatch(submitPostForm(post));
  }

  //I call send after my component state updates to trigger my notification displaying based on submitSucceeded being true
  send() {
    //notifActions comes from 'redux-notifications' - a package I'm using to handle my notifications
    const { notifSend } = notifActions;
    this.props.dispatch(
      notifSend({
        message: 'Dream saved! View it on your Calendar.',
        kind: 'success',
        dismissAfter: 4000
      })
    );

    this.props.dispatch(reRender(true));
    this.props.dispatch(reset('post'));
  }

  componentDidUpdate() {
    if (this.props.submitSucceeded) {
      return this.send();
    }
  }

  render() {
    //set up pristine and submitting to use in my return
    const { pristine, submitting } = this.props;

    //form details
    const details = (
      <React.Fragment>
        <div className="handle">
          <button
            className="close-btn"
            onClick={() => this.props.dispatch(viewPostForm(false))}
          >
            <img alt="close button" src={require('../imgs/x.png')} />
          </button>
          <h3>{moment(Date.now()).format('MMM Do YY')}</h3>
        </div>
        <form
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          <label>Title</label>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="Title for your dream"
          />
          <label>What did you dream about?</label>
          <Field
            name="content"
            component="textarea"
            placeholder="Try and remember all of the little details..."
          />
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
        </form>
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <Media query="(max-width: 1024px)">
          {matches =>
            matches ? (
              <div className="post-container small">{details}</div>
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
                <div className="post-container">{details}</div>
              </Draggable>
            )
          }
        </Media>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    submitSucceeded: state.submitSucceeded,
    viewCalendar: state.dashboard.viewCalendar
  };
};

PostForm = reduxForm(
  {
    form: 'post',
    onSubmitFail: (errors, dispatch) =>
      dispatch(focus('signUp', Object.keys(errors)[0]))
  },
  mapStateToProps
)(PostForm);

export default connect(mapStateToProps)(PostForm);
