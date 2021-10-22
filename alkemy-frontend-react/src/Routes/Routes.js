import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";

const Routes = () => {
  return (
    <Switch>
      {/* <Route exact path="/app" component={CountriesCatalog} />
      <Route exact path="/countries/:id" component={Details} />
      <Route exact path="/create" component={Form} /> */}
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
