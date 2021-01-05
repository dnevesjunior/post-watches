import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthConsumer } from '../../modules/Auth/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ authenticated }) => (
      <Route
        render={(props) =>
          authenticated ? <Component {...props} /> : <Redirect to="/login" />
        }
        {...rest}
      />
    )}
  </AuthConsumer>
);

export default ProtectedRoute;
