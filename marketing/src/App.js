import { StylesProvider } from "@material-ui/core";
import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default () => {
  return (
    <React.Fragment>
      <StylesProvider>
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
