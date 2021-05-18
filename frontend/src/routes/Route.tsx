import React, { useContext } from "react";
import { Route, Redirect, RouteProps as RouteDOMProps } from "react-router-dom";
import UserStore from "../stores/UserStore";

interface RouteProps extends RouteDOMProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const RouteWrapper: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const userStore = useContext(UserStore);
  const { isLogged } = userStore;
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isPrivate === isLogged ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/login' : '/', state: { from: location } }} />
        )
      }}
    />
  );
};

export default RouteWrapper;
