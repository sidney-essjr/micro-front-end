import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

// Generate a unique class name for each CSS class
const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default () => {
  return (
    <React.Fragment>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route exac path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </React.Fragment>
  );
};
