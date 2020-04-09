import React from 'react';
import { useLocation } from 'react-router-dom';

/**
 * 自定义的方法，用来获取 url query 部分的参数
 */
function useQuery() {
  return new URLSearchParams(useLocation().search);
};

const Lesson = () => {
  const query = useQuery();
  const id = query.get('id');

  return (
    <>
      <h2>Lesson Page</h2>
      <hr />
      {
        id ?
      	<h4>课程id：{ id }</h4> :
      	<h4>没有传入课程id</h4>
      }
    </>
  );
};

export default Lesson;
