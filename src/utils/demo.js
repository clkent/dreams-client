import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../_actions/auth.action';

class Demo extends React.Component {
  render() {
    const { loggedIn, dispatch } = this.props;
    if (loggedIn) return <Redirect to="/dashboard" />;
    dispatch(login('demo', 'testing123'));
    return <Redirect to="/dashboard" />;
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps)(Demo);
