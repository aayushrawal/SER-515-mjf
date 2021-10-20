import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUs from "./components/AboutUs";

import Login from "./components/Authentication/Login";
import Registration from "./components/Authentication/Registration";
import FAQ from "./components/FAQ";
import Landing from "./components/Landing";
import NavigationHeader from "./components/Navbars/NavigationHeader";
import Rules from "./components/Rules";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationHeader />
        <Switch>
          <Route path="/login" exact render={(props) => <Login {...props} />} />
          <Route
            path="/register"
            exact
            render={(props) => <Registration {...props} />}
          />
          <Route path="/" exact render={(props) => <Landing {...props} />} />
          <Route
            path="/about-us"
            exact
            render={(props) => <AboutUs {...props} />}
          />
          <Route
            path="/faq"
            exact
            render={(props) => <FAQ {...props} />}
          />
          <Route
            path="/rules"
            exact
            render={(props) => <Rules {...props} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
