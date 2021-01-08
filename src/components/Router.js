import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "routes/Home";

const Router = ({ isLogin }) => (
  <HashRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Redirect from="*" to="/" />
    </Switch>
  </HashRouter>
);

export default Router;
