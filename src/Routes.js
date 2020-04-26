import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Images from "./containers/Images";
import Playlists from "./containers/Playlists";
import Videos from "./containers/Videos";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      
      <Route exact path="/images">
        <Images/>
      </Route>

      <Route exact path="/videos">
        <Videos/>
      </Route>

      <Route exact path="/playlists">
        <Playlists/>
      </Route>
    </Switch>
  );
}