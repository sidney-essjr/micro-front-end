import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

// Generate a unique class name for each CSS class
const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header onSignOut={() => setIsSignIn(false)} isSignIn={isSignIn} />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthLazy onSignIn={() => setIsSignIn(true)} />
            </Route>
            <Route path="/" component={MarketingLazy} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
};
