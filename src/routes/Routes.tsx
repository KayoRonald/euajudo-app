import React from 'react';

import { 
  BrowserRouter, Switch, Route 
} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import FooterContainer from '../containers/footer';
import {
  Home, PageNotFound, About
} from '../pages';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.ABOUT} component={About} />
          <Route component={PageNotFound} />
        </Switch>
        <FooterContainer/>
    </BrowserRouter>
  );
}

export default AppRouter