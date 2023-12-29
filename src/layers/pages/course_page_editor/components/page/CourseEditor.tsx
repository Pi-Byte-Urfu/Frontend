import React, { FC } from 'react';
import style from './CourseEditor.module.scss';
import CourseEditorNavigation from '../navigation/CourseEditorNavigation';
import { Outlet, useLoaderData, useParams } from 'react-router-dom';
import { ICourseData } from '../../types/ICourseData';
import MDXEditorText from '../../../../modules/mdx/mdx_editor_text/components/editor/MDXEditorText';
import { update } from 'immutable';
import { updateCourse } from '../../api/updateCourse';

const CourseEditor:FC = () => {
  const courseData = useLoaderData() as ICourseData;
  const { courseId } = useParams();

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