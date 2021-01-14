import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "routes/Home";
import Rank from "routes/Rank";

const Router = ({ isLogin }) => (
  <HashRouter>
    <Switch>
      <Route exact path="/">
        <Home isLogin={isLogin} />
      </Route>
      <Route exact path="/rank">
        <Rank />
      </Route>
      <Redirect from="*" to="/" />
    </Switch>
  </HashRouter>
);

export default Router;
