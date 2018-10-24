import React from 'react';
import { NavLink } from 'react-router-dom';

const PostFormContent = () => (
  <React.Component>
    <div className="handle">
      <button
        className="close-btn"
        onClick={() => this.props.dispatch(viewPostForm(false))}
      >
        <img alt="close button" src={require('../imgs/x.png')} />
      </button>
      <h3>{moment(Date.now()).format('MMM Do YY')}</h3>
    </div>
    <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
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
  </React.Component>
);

export default PostFormContent;
