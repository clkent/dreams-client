import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Navigation from '../_components/navigation.component';
import SignUpForm from '../_components/signupForm.component';
import Footer from '../_components/footer.component';

export function SignUp(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="pages secondary">
      <Navigation />
      <div className="box">
        <h1>Sign Up</h1>
        <SignUpForm />
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignUp);
