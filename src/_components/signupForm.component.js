import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { signUpUser } from '../_actions/users.action';
import { login } from '../_actions/auth.action';
import Input from './input.component';
import {
  required,
  nonEmpty,
  matches,
  length,
  isTrimmed
} from '../utils/validators';
const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches('password');

export class SignUpForm extends React.Component {
  onSubmit(values) {
    const { username, password, name, email } = values;
    const user = { username, password, name, email };
    return this.props
      .dispatch(signUpUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <label htmlFor="name">Name</label>
        <Field component={Input} type="text" name="name" />
        <label htmlFor="username">Username</label>
        <Field
          component={Input}
          type="text"
          name="username"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="email">Email</label>
        <Field component={Input} type="text" name="email" />
        <label htmlFor="password">Password</label>
        <Field
          component={Input}
          type="password"
          name="password"
          validate={[required, passwordLength, isTrimmed]}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>
        <Field
          component={Input}
          type="password"
          name="passwordConfirm"
          validate={[required, nonEmpty, matchesPassword]}
        />
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Sign up
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signUp',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('signUp', Object.keys(errors)[0]))
})(SignUpForm);
