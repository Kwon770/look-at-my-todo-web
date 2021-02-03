import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "routes/Home";
import Rank from "routes/Rank";

const Router = ({ isLogin }) => (
  <HashRouter>
    <Switch>
      <Route exact path="/">
        <Rank />
      </Route>
      <Route exact path="/todo">
        <Home isLogin={isLogin} />
      </Route>
      <Redirect from="*" to="/" />
    </Switch>
  </HashRouter>
);

export default Router;
