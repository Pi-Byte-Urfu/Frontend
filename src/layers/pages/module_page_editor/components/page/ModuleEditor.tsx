import React, { FC, useEffect } from 'react';
import style from './ModuleEditor.module.scss';
import ModuleEditorNavigation from '../navigation/ModuleEditorNavigation';
import { Outlet, useLoaderData, useLocation, useParams } from 'react-router-dom';
import { createContext } from 'vm';
import { IModuleData } from '../../types/IModuleData';
import changeModeBtnStyles from '../../../../../root/scss/ChangeMode.module.scss';
import { Link } from 'react-router-dom';
import { store } from '../../../../..';
import { UserType } from '../../../../../types/userType';
import btnStyles from '../../../../ui/button/Button.module.scss';

const ModuleEditor:FC = () => {
  const moduleData = useLoaderData() as IModuleData;
  const location = useLocation();

  return (
    <div className={style.page}>
      <ModuleEditorNavigation moduleName={moduleData.name}/>
      <div className={style.body}>
        <div className={style.bodyContainer}>
        {
            store.user?.userType == UserType.teacher  && !location.pathname.includes('choiceStep') && (
              <div className={style.toolPanel}>
                <Link to={location.pathname.replace('courseEditor', 'course')} className={btnStyles.blackBtn}>
                  режим просмотра
                </Link>                
              </div>
            )

          }
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default ModuleEditor;