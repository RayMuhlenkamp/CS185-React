import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/home/Home";
import Images from "./containers/images/Images";
import Playlists from "./containers/playlists/Playlists";
import Videos from "./containers/videos/Videos";

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