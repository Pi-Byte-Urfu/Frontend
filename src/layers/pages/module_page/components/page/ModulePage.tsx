import React, { FC } from 'react';
import ModulePageNavigation from '../navigation/ModulePageNavigation';
import style from './ModulePage.module.scss';
import { Outlet, useLoaderData } from 'react-router-dom';
import { IModuleData } from '../../../module_page_editor/types/IModuleData';

const ModulePage: FC = () => {
  const moduleData = useLoaderData() as IModuleData;

  return (
    <div className={style.page}>
      <ModulePageNavigation moduleName={moduleData.name}/>
      <div className={style.body}>
        <div className={style.bodyContainer}>
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default ModulePage;