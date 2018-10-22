import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Header from '../_components/header.component';

export function Home(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="home">
      <Header />
      <main class="wrap">
        <h1 className="underlined underlined--gradient">
          Dreams are the portal to your unconscious mind
        </h1>
        <p>you should really sign up now.</p>
        <Link to="/signup">Sign Up</Link>
      </main>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Home);
