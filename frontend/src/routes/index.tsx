import React from "react";
import { BrowserRouter, Switch } from 'react-router-dom';
import CustomRoute from './Route'
import List from "../pages/List";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <CustomRoute path="/" exact component={List} isPrivate />
        <CustomRoute path="/profile/:id" component={Profile} isPrivate />
        <CustomRoute path="/login" component={Login} />
        <CustomRoute path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
