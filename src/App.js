import React from "react";
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import { Header } from "./components";
import ROUTES from "./utilities/routes";

import {
  Login,
  Home,
} from './views';

const App = () => {
  
  return (
    <React.Fragment>
    {/* Header Swich*/}
    <Switch>
      <Route exact path={ROUTES.LOGIN} render={() => null} />
      <Route component={Header} />
    </Switch>
    {/* Content Swich*/}
    <Switch>
      <Route exact path={ROUTES.LOGIN} component={Login} />
      <Route path={ROUTES.ROOT} component={Home} />
    </Switch>
  </React.Fragment>
  );
}

const AppWithRouter = withRouter(App)

export default AppWithRouter;
