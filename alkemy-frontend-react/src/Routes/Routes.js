import React, { Fragment } from "react";

import { Switch, Route } from "react-router-dom";
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
    <>
      <Navbarmenu />
      <Switch>
        <Route exact path="/about" component={About} />
        <ProtectedRoutes
          exact
          path="/details"
          component={Details}
          isAuth={isAuth}
        />
        <ProtectedRoutes
          exact
          path="/search"
          component={Search}
          isAuth={isAuth}
        />
        <ProtectedRoutes exact path="/home" component={Home} isAuth={isAuth} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </>
  );
};

export default Routes;
