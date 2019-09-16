import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import Auth from '../Auth';

type TProps = RouteProps & {
  component: any
}

export const PrivateRoute = ({ component: Component, ...rest }: TProps) => {
  console.log(Auth.isAuthenticated);
  return (
    <Route
      {...rest}
      render={props => 
        Auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location
              }
            }}
          />
        )
      }
    />
  );
};