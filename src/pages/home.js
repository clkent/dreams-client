import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Navigation from '../_components/navigation.component';
import Footer from '../_components/footer.component';

export function Home(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="pages">
      <section role="region" className="home-header">
        <Navigation />
        <div class="wrap">
          <h1 className="underlined underlined--gradient">
            What are your dreams trying to tell you?
          </h1>
          <p>keeping a dream journal can help unlock your unconscious mind</p>
          <Link
            aria-label="Start tonight - click this button to go to sign up page"
            to="/signup"
            className="btn"
          >
            Start Tonight
          </Link>
        </div>
      </section>
      <section role="region" className="body">
        <div className="overview">
          <div>
            <h2>Paper and pen work great and all but...</h2>
            <p>
              <b>Dream Recall</b> provides you with so much more. When you sign
              up you'll be automatically logged into your own custom{' '}
              <b>Dream Desktop</b> where you'll find the tools you need to
              record, revisit, and understand your dreams. Writing down your
              dreams as soon as you wake up dramatically increases your ability
              to remember details and it's what's in the details that really
              matter.
            </p>
            <p>
              Understanding your dreams can be crucial to your emotional and
              mental health. Dreams are means by which we solve problems and
              deal with deep emotions and lingering thoughts. Help bring clarity
              to your dreams.
            </p>
            <p>
              <b>
                Let your Dream Desktop be the hub for your unconscious mind.
              </b>
            </p>
          </div>
        </div>
        <div className="detail-text">
          <div>
            <h2>Record your dreams</h2>
            <p>
              Remember to login <b>every morning</b> as soon as you wake up and
              write down as much as you can remember on the dream notepad! You
              can save as many dreams you have per day (looking at you nap
              dreamers) but <b>don't forget</b> to post each day! We
              intentionally limit posts to only the current day because your
              memory of your dream starts to fade and those important details go
              with it.
            </p>
          </div>
          <img
            aria-label="illustration of a notepad"
            alt="notepad"
            src={require('../imgs/notepad-icon.png')}
          />
        </div>
        <div className="detail-text">
          <img
            aria-label="illustration of a calendar"
            alt="Calendar"
            src={require('../imgs/cal-icon.png')}
          />
          <div>
            <h2>Revisit your dreams</h2>
            <p>
              As <b>each day passes</b> and you add more dreams to your Dream
              Dashboard you'll find your calendar view very helpful for
              revisiting past dreams. Make it a <b>daily habit</b> to reread the
              dreams you had the night before and see what you think they have
              in common with last nights!
            </p>
          </div>
        </div>
        <div className="detail-text">
          <div>
            <h2>Analyze your dreams</h2>
            <p>
              <b>COMING SOON </b> you'll have access to data showing recurring
              themes in your dreams and the emotional connections between them.
              Having a <b>birds eye view</b> of your ongoing dream themes will
              help you make sense of it all – either giving you the foundation
              needed to understand how to grow from any deeply rooted issues or
              to just have fun with connecting the dots between the silliest
              dreams you've ever had!
            </p>
          </div>
          <img
            aria-label="illustration of an atom"
            alt="Data"
            src={require('../imgs/atom-icon.png')}
          />
        </div>
        <div className="sign-up-request">
          <h2>Don't let another night's dreams slip by</h2>
          <Link
            aria-label="Sign Up! - click this button to go to the sign up page"
            to="/signup"
            className="btn"
          >
            Sign up, it's free!
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Home);
