import React, { FC, useRef, useState } from 'react';
import style from './CourseEditorNavigation.module.scss';
import Button from '../../../../ui/button/Button';
import { Form, useLoaderData } from 'react-router-dom';
import Input from '../../../../ui/input/Input';
import CourseNavigation from '../../../course_page/components/navigation/CourseNavigation';
import ModulesList from '../../../../modules/modules_list/component/ModulesList';


const CourseEditorNavigation:FC = () => {


  return (
    <nav className={style.nav}>
      <ModulesList/>
      <Form method='POST' action='createModule' className={style.createLinkForm}>
        <input
          name="moduleName" 
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
    </nav>
  );
};

export default CourseEditorNavigation;