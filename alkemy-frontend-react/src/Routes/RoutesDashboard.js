import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Details from "../components/Details";
import Home from "../components/Home";
import Navbarmenu from "../components/Navbarmenu";
import Search from "../components/Search";

const RoutesDashboard = () => {
  return (
    <div>
      <Navbarmenu />
      <Switch>
        <Route exact path="/details" component={Details} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
};

export default RoutesDashboard;
