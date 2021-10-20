import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/Authentication/Login";
import Registration from "./components/Authentication/Registration";
import Landing from "./components/Landing";

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
          <Route path="/" exact render={(props) => <Landing {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
