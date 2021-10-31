import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Details from "../components/Details";
import Home from "../components/Home";
import Search from "../components/Search";
import Navbarmenu from "../components/Navbarmenu";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../components/Login";
import About from "../components/About";
import { useSelector } from "react-redux";

const Routes = () => {
  const isAuth = useSelector((store) => store.searchList.isAuth);
  console.log(isAuth);
  return (
    <Router>
      <Navbarmenu />
      <Switch>
        <Route exact path="/about" component={About} />
        <ProtectedRoutes
          exact
          path="/details"
          component={Details}
          isAuth={true}
        />
        <ProtectedRoutes
          exact
          path="/search"
          component={Search}
          isAuth={true}
        />
        <ProtectedRoutes exact path="/home" isAuth={true} component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default Routes;
