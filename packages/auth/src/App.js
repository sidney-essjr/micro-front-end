import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

// Generate a unique class name for each CSS class
const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history, onSignIn }) => {
  return (
    <React.Fragment>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <SignIn onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup">
              <SignUp onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </React.Fragment>
  );
};
