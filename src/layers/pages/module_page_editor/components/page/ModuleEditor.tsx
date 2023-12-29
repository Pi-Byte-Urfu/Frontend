import React, { FC, useEffect } from 'react';
import style from './ModuleEditor.module.scss';
import ModuleEditorNavigation from '../navigation/ModuleEditorNavigation';
import { Outlet, useLoaderData } from 'react-router-dom';
import { createContext } from 'vm';
import { IModuleData } from '../../types/IModuleData';

const ModuleEditor:FC = () => {
  const moduleData = useLoaderData() as IModuleData;

  return (
    <div className={style.page}>
      <ModuleEditorNavigation moduleName={moduleData.name}/>
      <div className={style.body}>
        <div className={style.bodyContainer}>
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default ModuleEditor;