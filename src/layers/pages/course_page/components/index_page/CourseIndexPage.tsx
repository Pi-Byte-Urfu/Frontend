import React, { FC } from 'react';
import CourseNavigation from '../navigation/CourseNavigation';
import style from './CourseIndexPage.module.scss';

const CourseIndexPage:FC = () => {
  return (
    <div className={style.page}>
      <CourseNavigation/>
      <div>
        Описание курса
      </div>      
    </div>
  );
};

export default CourseIndexPage;