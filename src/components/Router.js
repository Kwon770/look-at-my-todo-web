import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "routes/Home";
import Rank from "routes/Rank";
import { useIsLoggedIn } from "./AuthContext";

const Router = () => {
  const isLoggedIn = useIsLoggedIn();

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Rank />
        </Route>
        <Route exact path="/todo">
          <Home isLoggedIn={isLoggedIn} />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </HashRouter>
  );
};

export default Router;
