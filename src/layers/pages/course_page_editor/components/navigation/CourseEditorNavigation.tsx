import React, { FC, useEffect, useRef, useState } from 'react';
import style from './CourseEditorNavigation.module.scss';
import Button from '../../../../ui/button/Button';
import { Form, useFetcher, useLoaderData, useParams } from 'react-router-dom';
import Input from '../../../../ui/input/Input';
import CourseNavigation from '../../../course_page/components/navigation/CourseNavigation';
import ModulesList from '../../../../modules/modules_list/component/ModulesList';
import UploaderImg from '../../../../components/uploader_img/components/UploaderImg';
import inputStyles from '../../../../ui/input/Input.module.scss';
import formStyles from '../../../../../root/scss/Form.module.scss';
import { AxiosResponse } from 'axios';
import { IModuleItem } from '../../../../components/module_item/types/IModuleItem';
import { IModulesListData } from '../../../../modules/modules_list/types/IModulesListData';
import { IModuleResponse } from '../../types/IModuleResponse';

interface ICourseEditorNavigationProps {
  courseName: string
}

const CourseEditorNavigation:FC<ICourseEditorNavigationProps> = ({courseName}) => {
  const { courseId } = useParams();
  const fetcher = useFetcher();
  const formRef = useRef<HTMLFormElement>(null);
  const saveNameBtn = useRef<HTMLButtonElement>(null);
  const newModuleNameInput = useRef<HTMLInputElement>(null);
  const newModuleFetcher = useFetcher<IModuleResponse>();
  const modulesFetcher = useFetcher<IModuleItem[]>();
  const [modules, setModules] = useState<IModuleItem[]>([]);

  useEffect(() => {
    if (newModuleFetcher.data != null && newModuleNameInput.current != null) {
       setModules([...modules, { id: newModuleFetcher.data.id, name: newModuleNameInput.current.value} as IModuleItem]);
       newModuleNameInput.current.value = '';
    }
  }, [newModuleFetcher]);

  useEffect(() => {
    if (modulesFetcher.state === 'idle' && courseId !== undefined) {
      modulesFetcher.load(`/modulesList/${courseId}`)
    }
  }, [courseId]);

  useEffect(() => {
    setModules(modulesFetcher.data ?? []);
  }, [modulesFetcher])

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
            onChange={() => {
              if (saveNameBtn.current != null) {
                saveNameBtn.current.click();
              }
            }}
            />
            <button type='submit' className={style.saveName} ref={saveNameBtn}>
            </button>
        </fetcher.Form>
      </div>
      <ModulesList modules={modules} setModules={setModules}/>
      <newModuleFetcher.Form method='POST' action='createModule' className={formStyles.createEntityForm}>
        <input
          name="name" 
          type='text' defaultValue={''} 
          placeholder='Новый модуль' 
          ref={newModuleNameInput}
        />
        <Button 
          styles={[]} 
          type='submit'
        >
          <span className={style.plus}>+</span>
        </Button>
      </newModuleFetcher.Form>
    </div>
  );
};

export default CourseEditorNavigation;