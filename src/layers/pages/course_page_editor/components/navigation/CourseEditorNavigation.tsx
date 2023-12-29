import React, { FC, useRef, useState } from 'react';
import style from './CourseEditorNavigation.module.scss';
import Button from '../../../../ui/button/Button';
import { Form, useFetcher, useLoaderData, useParams } from 'react-router-dom';
import Input from '../../../../ui/input/Input';
import CourseNavigation from '../../../course_page/components/navigation/CourseNavigation';
import ModulesList from '../../../../modules/modules_list/component/ModulesList';
import UploaderImg from '../../../../components/uploader_img/components/UploaderImg';
import inputStyles from '../../../../ui/input/Input.module.scss';

interface ICourseEditorNavigationProps {
  courseName: string
}
const CourseEditorNavigation:FC<ICourseEditorNavigationProps> = ({courseName}) => {
  const { courseId } = useParams();
  const fetcher = useFetcher();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className={style.nav}>
      <div className={style.navHeader}>
        <UploaderImg
          photoAlt='Course cover'
          targetPath={`courses/${courseId}/photo`}
          styles={[style.cover]}
        />
        <fetcher.Form method='POST' action='updateCourse' className={style.nameForm} ref={formRef}>
          <input type={'text'} 
            defaultValue={fetcher.data ?? courseName} 
            name={"name"} 
            placeholder='Измените название курса' 
            className={inputStyles.courseName}
            />
            <button type='submit' className={style.saveName}>
              <img src={require('../../../../../static/icons/save-icon.svg').default}/>
            </button>
        </fetcher.Form>
      </div>
      <ModulesList/>
      <Form method='POST' action='createModule' className={style.createLinkForm}>
        <input
          name="name" 
          type='text' defaultValue={''} 
          placeholder='Новый модуль'
          className={[style.moduleNameInput].join(' ')}  
        />
        <Button 
          styles={[style.createNavLinkBtn]} 
          type='submit'
        >
          <span className={style.plus}>+</span>
        </Button>
      </Form>
    </div>
  );
};

export default CourseEditorNavigation;