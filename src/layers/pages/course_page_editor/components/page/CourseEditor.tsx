import React, { FC, useReducer, useRef } from 'react';
import style from './CourseEditor.module.scss';
import CourseEditorNavigation from '../navigation/CourseEditorNavigation';
import { Outlet, useLoaderData, useLocation, useParams } from 'react-router-dom';
import { ICourseData } from '../../types/ICourseData';
import MDXEditorText from '../../../../modules/mdx/mdx_editor_text/components/editor/MDXEditorText';
import { update } from 'immutable';
import { updateCourse } from '../../api/updateCourse';
import { Link } from 'react-router-dom';
import changeModeBtnStyles from '../../../../../root/scss/ChangeMode.module.scss';
import { store } from '../../../../..';
import { UserType } from '../../../../../types/userType';
import btnStyles from '../../../../ui/button/Button.module.scss';

const CourseEditor:FC = () => {
  const courseData = useLoaderData() as ICourseData;
  const { courseId } = useParams();
  const location = useLocation();
  async function updateDescriptionHandler(markdown: string) {
    if (courseId != undefined) {
      await updateCourse(+courseId, { description: markdown} as ICourseData)
    }
    
  }
  return (
    <div className={style.page}>
      <CourseEditorNavigation courseName={courseData.name ?? ''}/>
      <div className={style.description}>
        <div className={style.descriptionContainer}>
        {
            store.user?.userType == UserType.teacher && (
              <div className={style.toolPanel}>
                <Link to={location.pathname.replace('courseEditor', 'course')} className={btnStyles.blackBtn}>
                  режим просмотра
                </Link>
                <button type='button' className={btnStyles.blackBtn}>
                  удалить курс
                </button>              
              </div>
            )

          }
          <h2 className={style.title}>
            Описание курса
          </h2>
          <MDXEditorText defaultMarkdown={courseData.description ?? ''} actionPath={'updateCourse'} inputName={'description'}/>
        </div>
      </div>
    </div>
  );
};

export default CourseEditor;