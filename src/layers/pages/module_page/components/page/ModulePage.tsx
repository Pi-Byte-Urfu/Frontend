import React, { FC } from 'react';
import ModulePageNavigation from '../navigation/ModulePageNavigation';
import style from './ModulePage.module.scss';
import { Outlet } from 'react-router-dom';

const ModulePage: FC = () => {
  return (
    <div className={style.page}>
      <ModulePageNavigation/>
      <div className={style.page}>
        <Outlet/>
      </div>
    </div>
  );
};

export default ModulePage;