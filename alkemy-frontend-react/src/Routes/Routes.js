import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Search from "../components/Search";

const Routes = () => {
  return (
    <Switch>
      {/* <Route exact path="/app" component={CountriesCatalog} />
      <Route exact path="/countries/:id" component={Details} /> */}
      <Route exact path="/search" component={Search} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
