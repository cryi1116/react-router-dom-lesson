import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from '../pages/home';
import Lesson from '../pages/lesson';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/lesson">
          <Lesson />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
