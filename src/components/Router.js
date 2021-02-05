import React, { useEffect } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "routes/Home";
import Rank from "routes/Rank";
import {
  useIsLoggedIn,
  checkTokenAvailable,
  useLoadProfile,
} from "./AuthContext";

const Router = () => {
  const isLoggedIn = useIsLoggedIn();
  const loadProfile = useLoadProfile();

  const preLoad = async () => {
    const savedToken = localStorage.getItem("token");
    if (savedToken === null) return;

    const availability = await checkTokenAvailable(savedToken);
    if (availability) {
      await loadProfile(savedToken);
    }
  };

  useEffect(() => {
    preLoad();
  });

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Rank />
        </Route>
        <Route exact path="/todo">
          <Home />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </HashRouter>
  );
};

export default Router;
