import React, { useContext } from "react";
import {
  Switch,
  Route,
  withRouter,
  Redirect
} from "react-router-dom";
import {
  Header,
  CenteredLoader
} from "./components";
import ROUTES from "./utilities/routes";
import { UserContext } from './providers/user-provider'
import {
  Login,
  Home,
} from './views';

const App = ({ location }) => {
  const user = useContext(UserContext)

  // User hasn't been retrieved from Firebase auth
  if (user === undefined) return CenteredLoader({ height: '100%' })

  // No user logged
  console.log(location.pathname)
  //if (user.data === undefined && location.pathname !== ROUTES.LOGIN) return <Redirect to={ROUTES.LOGIN} />

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
