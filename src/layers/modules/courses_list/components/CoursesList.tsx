import React, { FC } from 'react';
import style from './CoursesList.module.scss';
import { ICourseItem } from '../types/ICourseItem';
import { useLoaderData } from 'react-router-dom';
import CourseItem from '../../../components/course_item/CourseItem';


const CoursesList:FC = () => {
  const courses = useLoaderData() as ICourseItem[];

  return (
    <ul className={style.list}>
      { 
        courses.length == 0 ? (
          <li className={style.empty}>
            У вас пока нет ни одного курса
          </li>
        )
         :
        courses.map(course => <CourseItem id={course.id} title={course.name} coverURL={course.coursePhoto} key={course.id}/>)}
    </ul>
  );
};

export default CoursesList;