import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function mount(el) {
  ReactDOM.render(<App />, el);
}

//development mode
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

//production mode or container exposes
export { mount };
