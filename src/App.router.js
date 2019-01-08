import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Notifs } from 'redux-notifications';

import Home from './pages/home';
import SignUp from './_containers/signup.container';
import LogIn from './_containers/login.container';
import Dashboard from './_containers/dashboard.container';
import NotFound from './pages/notFound';
import Demo from './utils/demo';

import 'redux-notifications/lib/styles.css';

const AppRouter = () => (
  <main role="main" className="main-container">
    <Notifs />
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/demo" component={Demo} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </main>
);

export default AppRouter;
