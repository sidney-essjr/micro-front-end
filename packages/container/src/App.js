import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";
import React, { lazy, Suspense, useEffect, useState } from "react";
import {Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Progress from "./components/Progress";
import { createBrowserHistory } from "history";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const DashboarLazy = lazy(() => import("./components/DashboardApp"));

// Generate a unique class name for each CSS class
const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

export default () => {
  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(() => {
    if (isSignIn) {
      history.push("/dashboard");
    }
  }, [isSignIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <Header onSignOut={() => setIsSignIn(false)} isSignIn={isSignIn} />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthLazy onSignIn={() => setIsSignIn(true)} />
            </Route>
            <Route path="/dashboard">
              {!isSignIn && <Redirect to="/" />}
              <DashboarLazy />
            </Route>
            <Route path="/" component={MarketingLazy} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </Router>
  );
};
