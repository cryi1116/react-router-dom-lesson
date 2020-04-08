import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import AboutInfoEdit from '../../../pages/about/info/edit';

const AboutInfoRoute = (props) => {
  const { path } = props;

  return (
    <Switch>
      <Route path={`${path}/edit`}>
        <AboutInfoEdit />
      </Route>
    </Switch>
  );
};

export default AboutInfoRoute;
