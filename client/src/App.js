import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Users from "./users/pages/users";
import NewPlace from "./places/pages/new-place";
import EditPlace from "./places/pages/edit-place";
import Home from "./shared/components/home";
import UserPlaces from "./places/pages/user-places";
import AllPlaces from "./places/pages/all-places";
import Auth from "./users/pages/auth";
import MainNavigation from "./shared/components/Navigation/nav-main";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <BrowserRouter>
      <MainNavigation></MainNavigation>
      <main>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/places" exact>
            <AllPlaces />
          </Route>
          <Route path="/:id/places" exact><UserPlaces /></Route>
          {isLoggedIn && <Route path="/places/new"><NewPlace /></Route>}
          {isLoggedIn && <Route path="/places/edit/:id"><EditPlace /></Route>}
          {!isLoggedIn && <Route path="/auth"><Auth /></Route>}
          {!isLoggedIn ? (
            <Redirect to="/auth" />
          ) : (
            <Redirect to="/users"/>
          )}
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
