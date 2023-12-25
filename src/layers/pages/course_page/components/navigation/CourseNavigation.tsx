import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const CourseNavigation:FC = () => {
  return (
       <ul>
          <li>
            <Link to='module/1'>
              Модуль 1
            </Link>
          </li>
       </ul>
  );
};

export default CourseNavigation;