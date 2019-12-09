import React, { useState, useCallback } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Users from "./users/pages/users";
import NewPlace from "./places/pages/new-place";
import EditPlace from "./places/pages/edit-place";
import Home from "./shared/components/home";
import UserPlaces from "./places/pages/user-places";
import AllPlaces from "./places/pages/all-places";
import Auth from "./users/pages/auth";
import MainNavigation from "./shared/components/Navigation/nav-main";
import { AuthContext } from "./shared/context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');

  const login = useCallback((id) => {
    setIsLoggedIn(true);
    setUserId(id);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId('');
  }, []);

  return (
    <AuthContext.Provider value={{isLoggedIn, userId, login, logout}}>
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
              <Redirect to="/"/>
            )}
          </Switch>
        </main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
