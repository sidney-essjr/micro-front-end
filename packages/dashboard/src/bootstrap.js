import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

// Mount function to start up the app
const mount = (el) => {
  const app = createApp(Dashboard)
  app.mount(el)
};

//development mode
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

//production mode or container exposes
export { mount };
