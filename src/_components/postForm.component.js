import React from 'react';
// import Draggable from './draggable.component';
import { Field, reduxForm, focus } from 'redux-form';

import {
  // reducer as notifReducer,
  actions as notifActions
  // Notifs
} from 'redux-notifications';

import { submitPostForm } from '../_actions/post.action';
import '../css/dockNav.css'; //TODO: replace w/ correct css file

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
  }
  componentDidUpdate() {
    if (this.props.submitSucceeded) {
      return this.send();
    }
  }

  render() {
    //set up pristine and submitting to use in my return
    const { pristine, submitting } = this.props;

    return (
      <div className="small-browser">
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
          <br />
          <label>Details</label>
          <Field
            name="content"
            component="textarea"
            placeholder="What happened in your dream?"
          />
          <br />
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    submitSucceeded: state.submitSucceeded
  };
};

export default reduxForm(
  {
    form: 'post',
    onSubmitFail: (errors, dispatch) =>
      dispatch(focus('signUp', Object.keys(errors)[0]))
  },
  mapStateToProps
)(PostForm);
