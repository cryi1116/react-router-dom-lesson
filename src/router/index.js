import React from 'react';
import {
  BrowserRouter  as Router,
  Switch,
  Route,
} from 'react-router-dom';
import About from '../pages/about';
import Home from '../pages/home';
import Detail from '../pages/detail';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
