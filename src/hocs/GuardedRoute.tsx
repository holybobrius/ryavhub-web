import React, { FC, ReactElement } from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";

type Props = {
  render: (props: any) => ReactElement;
  auth: boolean;
} & RouteProps;

export const GuardedRoute: FC<Props> = ({ render, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (auth ? render(props) : <Redirect to="/unauth" />)}
  />
);
