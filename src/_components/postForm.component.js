import React from 'react';
// import Draggable from './draggable.component';
import { Field, reduxForm, focus } from 'redux-form';

import { submitPostForm } from '../_actions/post.action';

export class PostForm extends React.Component {
  onSubmit(values) {
    const { title, content } = values;
    const post = { title, content };
    return this.props.dispatch(submitPostForm(post));
    // .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    console.log(this.props);
    const style = {
      width: '800px',
      height: '400px',
      background: 'grey',
      border: '1px solid black'
    };
    const { pristine, submitting } = this.props;
    return (
      <div style={style}>
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

export default reduxForm({
  form: 'post',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('signUp', Object.keys(errors)[0]))
})(PostForm);
