import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();

  return (
    <>
      <h2>Detail Page</h2>
      <h3>ID：{ id }</h3>
    </>
  );
};

export default Detail;
