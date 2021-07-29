import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import {
  Home, PageNotFound, About, Map, Team, Contact, CreatePoint,
} from '../pages';

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.ABOUT} component={About} />
          <Route path={ROUTES.APPMAP} component={Map} />
          <Route path={ROUTES.TEAM} component={Team} />
          <Route path={ROUTES.SENDMAIL} component={Contact} />
          <Route path={ROUTES.CREATEPOINT} component={CreatePoint} />
          <Route component={PageNotFound} />
        </Switch>
    </BrowserRouter>
  );
};
