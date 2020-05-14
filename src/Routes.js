import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/home/Home";
import Images from "./containers/images/Images";
import Playlists from "./containers/playlists/Playlists";
import Videos from "./containers/videos/Videos";
import Guest from "./containers/guest/Guest";
import Movies from "./containers/movies/Movies";

export default function Routes() {
  const SCOPE = process.env.PUBLIC_URL;
  return (
    <Switch>
      <Route exact path={SCOPE + "/"}>
        <Home />
      </Route>
      
      <Route exact path={SCOPE + "/images"}>
        <Images/>
      </Route>

      <Route exact path={SCOPE + "/videos"}>
        <Videos/>
      </Route>

      <Route exact path={SCOPE + "/playlists"}>
        <Playlists/>
      </Route>

      <Route exact path={SCOPE + "/guest_book"}>
        <Guest/>
      </Route>

      <Route exact path={SCOPE + "/movies"}>
        <Movies/>
      </Route>
    </Switch>
  );
}