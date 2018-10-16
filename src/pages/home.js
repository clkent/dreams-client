import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Header from '../components/header.component';

export function Home(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <React.Fragment>
      <Header />
      <h1>Home Page</h1>
      <p>you should really sign up now.</p>
      <Link to="/signup">Sign Up</Link>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Home);
