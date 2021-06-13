import React from 'react';

import { 
  BrowserRouter, Switch, Route 
} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import {
  Home, PageNotFound, About, Map, Team, Contact
} from '../pages';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.ABOUT} component={About} />
          <Route path={ROUTES.APPMAP} component={Map} />
          <Route path={ROUTES.TEAM} component={Team} />
          <Route path={ROUTES.SENDMAIL} component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
    </BrowserRouter>
  );
}

export default AppRouter