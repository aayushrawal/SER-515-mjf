import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "./components/Authentication/Login";
import Registration from "./components/Authentication/Registration";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact render={(props) => <Login {...props} />} />
          <Route
            path="/register"
            exact
            render={(props) => <Registration {...props} />}
          />
          <Route path="/home" exact render={(props) => <Home {...props} />} />
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
