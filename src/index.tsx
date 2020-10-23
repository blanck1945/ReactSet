import * as React from "react";
import * as reactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./main.scss";
import HomeNavbar from "./components/home_navbar/HomeNavbar";
import Layout from "./layouts/Layout";

const App: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeNavbar} />
    </Switch>
  );
};

reactDOM.render(
  <Router>
    <React.StrictMode>
      <Layout>
        <App />
      </Layout>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

if (module && module.hot) module.hot.accept();

// <App />
