import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import HomePage from './pages/home/container';

const routes = [
  {
    path: '/home',
    component: HomePage,
    exact: true,
  },
];

const RouteMap = () => (
  <React.Fragment>
    <Switch>
      {routes.map(item => <Route {...item} key={item.path} />)}
      <Redirect exact from="*" to="/home" />
    </Switch>
  </React.Fragment>
);

export default RouteMap;
