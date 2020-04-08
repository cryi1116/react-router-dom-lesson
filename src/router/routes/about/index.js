import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import AboutInfo from '../../../pages/about/info';
import AboutCustom from '../../../pages/about/custom';

const AboutRoute = (props) => {
  const { path } = props;

  return (
    <Switch>
      <Route path={`${path}/info`}>
        <AboutInfo />
      </Route>
      <Route path={`${path}/custom`}>
        <AboutCustom />
      </Route>
    </Switch>
  );
};

export default AboutRoute;
