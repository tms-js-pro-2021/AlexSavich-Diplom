import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthorized } from '../../hooks/useAuthorized';

export const ProtectedRoute = props => {
  const authorized = useAuthorized();

  if (!authorized) {
    return <Redirect to="/" />;
  }
  return <Route {...props} />;
};
