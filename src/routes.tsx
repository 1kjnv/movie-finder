import React from 'react';
import Main from './components/Main';
import MovieDetails from './components/MovieDetails/';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/movie/:id" component={MovieDetails} exact />
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;
