import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { DashboardPage } from './components/Pages';
import { AuthPage } from './components/Pages';

const Routes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/dashboard" component={DashboardPage} />
        <Redirect to="/dashboard" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/auth" component={AuthPage} />
      <Redirect to="/auth" />
    </Switch>
  );
};

export default Routes;
