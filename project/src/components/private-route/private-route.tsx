import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, Page } from '../../const';

interface PrivateRouteProps {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authorizationStatus, children } = props;
  return (
    authorizationStatus === AuthorizationStatus.Authorized
      ? children
      : <Navigate to={Page.LogIn}/>
  );
}
