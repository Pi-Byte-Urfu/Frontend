import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import style from './CoursePage.module.scss';
import CourseNavigation from '../navigation/CourseNavigation';

const CoursePage:FC = () => {
  return (
    <div className={style.page}>
      <CourseNavigation/>
      <div className={style.description}>
        Описание курса
      </div>
    </div>
  );
};

export default CoursePage;