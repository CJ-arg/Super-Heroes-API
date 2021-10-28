import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "../components/Details";
import RoutesDashboard from "./RoutesDashboard";
import Home from "../components/Home";
import Login from "../components/Login";
import Search from "../components/Search";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={RoutesDashboard} />
        {/* renderizar condicionalmente el RoutesDashboard stateDeLogin ? (<Route path="/" component={RoutesDashboard} />):
        <Redirect to="/login" />
        */}
      </Switch>
    </Router>
  );
};

export default Routes;
