import React, { FC } from 'react';
import ModulePageNavigation from '../navigation/ModulePageNavigation';
import style from './ModulePage.module.scss';
import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import { IModuleData } from '../../../module_page_editor/types/IModuleData';
import changeModeBtnStyles from '../../../../../root/scss/ChangeMode.module.scss';
import { Link } from 'react-router-dom';
import { store } from '../../../../..';
import { UserType } from '../../../../../types/userType';

const ModulePage: FC = () => {
  const moduleData = useLoaderData() as IModuleData;
  const location = useLocation();

  return (
    <div className={style.page}>
      <ModulePageNavigation moduleName={moduleData.name}/>
      <div className={style.body}>
        <div className={style.bodyContainer}>
          {
            store.user?.userType == UserType.teacher && 
          <Link to={location.pathname.replace('course', 'courseEditor')} className={changeModeBtnStyles.link}>
            режим редактирования
          </Link>
          }
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default ModulePage;