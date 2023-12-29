import React, { FC } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import style from './CoursePage.module.scss';
import CourseNavigation from '../navigation/CourseNavigation';
import { ICourseData } from '../../../course_page_editor/types/ICourseData';
import MDXContent from '../../../../modules/mdx/mdx_content/components/content/MDXContent';

const CoursePage:FC = () => {
  const courseData = useLoaderData() as ICourseData;

  return (
    <div className={style.page}>
      <CourseNavigation courseName={courseData.name ?? ''}/>
      <div className={style.description}>
        <div className={style.descriptionContainer}>
          <h2 className={style.title}>
            Описание курса
          </h2>
          <MDXContent defaultMarkdown={courseData.description ?? ''}/>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;