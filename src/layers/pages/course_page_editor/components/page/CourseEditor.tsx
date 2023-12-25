import React, { FC } from 'react';
import style from './CourseEditor.module.scss';
import CourseEditorNavigation from '../navigation/CourseEditorNavigation';
import { Outlet } from 'react-router-dom';

const CourseEditor:FC = () => {
  return (
    <div className={style.page}>
      <CourseEditorNavigation/>
      <div className={style.description}>
        <div className={style.descriptionContainer}>
          Описание курса
        </div>
      </div>
    </div>
  );
};

export default CourseEditor;