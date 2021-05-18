import React, { Component, useContext } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import UserStore from "../stores/UserStore";

function RouteWrapper({ <component: any>, isPrivate, ...rest }) {
  const userStore = useContext(UserStore);
  const { isLogged } = userStore;

  if (!isLogged && isPrivate) {
    return <Redirect to="/login" />;
  }
  if (isLogged && !isPrivate) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

RouteWrapper.prototype = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = { isPrivate: false };

export default RouteWrapper;
