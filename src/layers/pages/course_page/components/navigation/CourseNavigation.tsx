import React, { FC, useEffect, useState } from 'react';
import { Link, useFetcher, useParams } from 'react-router-dom';
import style from './CourseNavigation.module.scss';
import { API_URL } from '../../../../../http';
import ModulesList from '../../../../modules/modules_list/component/ModulesList';
import { IModuleItem } from '../../../../components/module_item/types/IModuleItem';
import { useEditor } from '../../../text_editor/hooks/useEditor';

interface ICourseNavigationProps {
  courseName: string
}

const CourseNavigation:FC<ICourseNavigationProps> = ({ courseName }) => {
  const { courseId } = useParams();
  const [modules, setModules] = useState<IModuleItem[]>([]);
  const modulesFetcher = useFetcher<IModuleItem[]>();

  useEffect(() => {
    if (modulesFetcher.state == 'idle' && courseId != undefined) {
      modulesFetcher.load(`/modulesList/${courseId}`);
    }
  }, [courseId])

  useEffect(() =>{
    setModules(modulesFetcher.data ?? []);
  }, [modulesFetcher])

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
        <ModulesList modules={modules} setModules={setModules}/>        
      </div>
    </div>
  );
};

export default CourseNavigation;