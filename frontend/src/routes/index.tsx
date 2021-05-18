import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Route from "./Route";
import List from "../pages/List";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={List} isPrivate />
        <Route path="/profile" component={Profile} isPrivate />
        <Route path="/login" component={Login} isPrivate={false} />
        <Route path="/register" component={Register} isPrivate={false} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
