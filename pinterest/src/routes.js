import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from './components/dashboard';

export default () => (
  <Router>
    <Switch>
      <Route path="/" render={Dashboard} />
    </Switch>
  </Router>
);
