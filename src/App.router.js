import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import SignUp from './_containers/signup.container';
import LogIn from './_containers/login.container';
import Dashboard from './_containers/dashboard.container';
import NotFound from './pages/notFound';

const AppRouter = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default AppRouter;
