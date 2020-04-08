import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import AboutInfoRouter from '../../../router/routes/about/info';

const AboutInfo = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <h3>About 子路由 Info</h3>
      <AboutInfoRouter path={path} />
    </>
  );
};

export default AboutInfo;