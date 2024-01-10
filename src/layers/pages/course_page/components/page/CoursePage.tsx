import React, { FC } from 'react';
import { Outlet, useLoaderData, useLocation, useParams } from 'react-router-dom';
import style from './CoursePage.module.scss';
import CourseNavigation from '../navigation/CourseNavigation';
import { ICourseData } from '../../../course_page_editor/types/ICourseData';
import MDXContent from '../../../../modules/mdx/mdx_content/components/content/MDXContent';
import changeModeBtnStyles from '../../../../../root/scss/ChangeMode.module.scss';
import { Link } from 'react-router-dom';
import { store } from '../../../../..';
import { UserType } from '../../../../../types/userType';
const CoursePage: FC = () => {
  const courseData = useLoaderData() as ICourseData;
  const { courseId } = useParams();
  const location = useLocation();
  const userId = store.user?.id;
  return (
    <div className={style.page}>
      <CourseNavigation courseName={courseData.name ?? ''} />
      <div className={style.description}>
        <div className={style.descriptionContainer}>
          {
            store.user?.userType == UserType.teacher ?
            (
              <Link to={location.pathname.replace('course', 'courseEditor')} className={changeModeBtnStyles.link}>
                режим редактирования
              </Link>
            )
            : (
              <Link to={`/studentProgress/${userId}/course/${courseId}`} className={changeModeBtnStyles.link}>
                прогресс курса
              </Link>
            )
          }
          <h2 className={style.title}>
            Описание курса
          </h2>
          <MDXContent defaultMarkdown={courseData.description ?? ''} />
        </div>
      </div>
    </div>
  );
};

export default CoursePage;