import React from 'react';
import Main from './components/Main';
import MovieComponent from './components/Movie';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/movie/:id" component={MovieComponent} exact />
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;