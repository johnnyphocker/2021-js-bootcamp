import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {

  let user = {
    id: 23,
    name: 'JP',
    city: 'CDMX',
    isLogged: true
  };

  return (
    <Route
      {...rest}
      render={({ location }) =>
      user.isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute;