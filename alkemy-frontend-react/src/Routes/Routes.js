import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Details from "../components/Details";
import RoutesDashboard from "./RoutesDashboard";
import Home from "../components/Home";
import Login from "../components/Login";
import Search from "../components/Search";
import Navbarmenu from "../components/Navbarmenu";
import ProtectedRoutes from "./ProtectedRoutes";
import About from "../components/About";

const Routes = () => {
  return (
    <Router>
      <Navbarmenu />
      <Switch>
        <Route exact path="/details" component={Details} />
        <Route exact path="/about" component={About} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
      {/* <ProtectedRoutes /> */}

      {/* 
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={RoutesDashboard} />
        renderizar condicionalmente el RoutesDashboard stateDeLogin ? (<Route path="/" component={RoutesDashboard} />):
        <Redirect to="/login" />
       
        <Redirect to="/login" />
      </Switch> */}
    </Router>
  );
};

export default Routes;
