import React, { FC } from 'react';
import style from './CoursesList.module.scss';
import { ICourseItem } from '../types/ICourseItem';
import { useLoaderData } from 'react-router-dom';
import CourseItem from '../../../components/course_item/CourseItem';


const CoursesList:FC = () => {
  const courses = useLoaderData() as ICourseItem[];

  return (
    <ul className={style.list}>
      { courses.map(course => <CourseItem id={course.id} title={course.title} coverURL={course.coverURL} key={course.id}/>)}
    </ul>
  );
};

export default CoursesList;