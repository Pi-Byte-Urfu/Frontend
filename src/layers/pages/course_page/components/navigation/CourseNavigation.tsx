import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import style from './CourseNavigation.module.scss';
import { API_URL } from '../../../../../http';
import ModulesList from '../../../../modules/modules_list/component/ModulesList';

interface ICourseNavigationProps {
  courseName: string
}

const CourseNavigation:FC<ICourseNavigationProps> = ({ courseName }) => {
  const { courseId } = useParams();

  return (
    <div className={style.nav}>
      <div className={style.navContainer}>
        <div className={style.navHeader}>
          <div className={style.courseCover}>
            <img src={`${API_URL}courses/${courseId}/photo`} alt="course cover" className={style.courseCoverImg}/>
          </div>
          <h1 className={style.courseName}>
            {courseName}
          </h1>
        </div>
        <ModulesList/>        
      </div>
    </div>
  );
};

export default CourseNavigation;