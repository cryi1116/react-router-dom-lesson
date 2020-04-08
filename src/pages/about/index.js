import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import AboutRouter from  '../../router/routes/about';

const About = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <h2>About Page</h2>
      <AboutRouter path={path} />
    </>
  );
};

export default About;