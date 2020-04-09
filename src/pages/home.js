import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  let [lessons] = useState([
    {
      id: 1,
      name: 'React 基础教程',
    },
    {
      id: 2,
      name: 'React 路由导航系统',
    },
    {
      id: 3,
      name: 'React 多端解决方案——Taro',
    },
  ]);

  return (
    <>
      <h2>Home Page</h2>
      <hr />
      <ul>
        {
          lessons.map((lesson) => {
            return (
              <li key={lesson.id}>
                <Link to={`/lesson?id=${lesson.id}`}>
                  { lesson.name }
                </Link>
              </li>
            )
          })
        }
        <li>
         <Link to="/lesson">
            这是一个没传id的跳转
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
