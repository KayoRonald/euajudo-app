import React from 'react';

import { 
  BrowserRouter, Switch, Route 
} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import {
  Home, PageNotFound, About
} from '../pages';

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.ABOUT} component={About} />
          <Route component={PageNotFound} />
        </Switch>
    </BrowserRouter>
  );
}
