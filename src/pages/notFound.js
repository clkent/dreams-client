import React from 'react';
import { connect } from 'react-redux';

import Navigation from '../_components/navigation.component';
import DashNavigation from '../_components/dashNavigation.component';

const NotFound = props => {
  let nav;
  if (props.loggedIn) {
    nav = <DashNavigation />;
  } else {
    nav = <Navigation />;
  }

  return (
    <div className="pages secondary">
      {nav}
      <div class="box">
        <h1>404 Page Not Found!</h1>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NotFound);
