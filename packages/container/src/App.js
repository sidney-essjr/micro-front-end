import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import React from "react";

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <MarketingApp />;
    </BrowserRouter>
  );
};
