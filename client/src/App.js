import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Users from "./user/pages/users";
import NewPlace from "./places/pages/new-place";
import Home from "./shared/components/home";
import UserPlaces from "./places/pages/user-places";

function App() {
  return (
    <BrowserRouter>
      <nav></nav>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/:id/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new">
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
