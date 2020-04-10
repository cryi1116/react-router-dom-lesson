import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <>
      <h2>404 NOT A FOUND!</h2>
      <Link to="/">返回首页</Link>
    </>
  );
};

export default Error404;

