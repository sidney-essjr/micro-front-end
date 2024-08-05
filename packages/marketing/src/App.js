import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

// Generate a unique class name for each CSS class
const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default ({history}) => {
  return (
    <React.Fragment>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exac path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </React.Fragment>
  );
};
