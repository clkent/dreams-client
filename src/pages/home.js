import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Header from '../_components/header.component';

export function Home(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="pages">
      <section className="home-header">
        <Header />
        <div class="wrap">
          <h1 className="underlined underlined--gradient">
            What are your dreams trying to tell you?
          </h1>
          <p>keeping a dream journal can help unlock your unconscious mind</p>
          <Link to="/signup" className="btn">
            Start Tonight
          </Link>
        </div>
      </section>
      <section className="body">
        <div className="overview">
          <p>Sup</p>
        </div>
        <div className="left-text">
          <div>
            <h2>Post</h2>
            <p>
              Lorem ipsum dolor sit amet, justo ac massa consequat ac lectus,
              morbi eget tincidunt in eu varius nibh, erat tempor inceptos quam
              ornare suspendisse vestibulum, luctus in aliquam ac dui integer.
              Lorem posuere eget vel turpis sodales fusce, morbi sit dui, metus
              natoque fermentum egestas ipsum, commodo luctus feugiat dolor in
              mauris suspendisse. Dictum donec mauris enim blandit.
            </p>
          </div>
          <img alt="post icon" src={require('../imgs/notepad-icon.png')} />
        </div>
        <div className="right-text">
          <img alt="Calendar icon" src={require('../imgs/cal-icon.png')} />
          <div>
            <h2>Calendar</h2>
            <p>
              Lorem ipsum dolor sit amet, justo ac massa consequat ac lectus,
              morbi eget tincidunt in eu varius nibh, erat tempor inceptos quam
              ornare suspendisse vestibulum, luctus in aliquam ac dui integer.
              Lorem posuere eget vel turpis sodales fusce, morbi sit dui, metus
              natoque fermentum egestas ipsum, commodo luctus feugiat dolor in
              mauris suspendisse. Dictum donec mauris enim blandit.
            </p>
          </div>
        </div>
        <div className="left-text">
          <div>
            <h2>Data</h2>
            <p>
              Lorem ipsum dolor sit amet, justo ac massa consequat ac lectus,
              morbi eget tincidunt in eu varius nibh, erat tempor inceptos quam
              ornare suspendisse vestibulum, luctus in aliquam ac dui integer.
              Lorem posuere eget vel turpis sodales fusce, morbi sit dui, metus
              natoque fermentum egestas ipsum, commodo luctus feugiat dolor in
              mauris suspendisse. Dictum donec mauris enim blandit.
            </p>
          </div>
          <img alt="Data icon" src={require('../imgs/atom-icon.png')} />
        </div>
      </section>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Home);
