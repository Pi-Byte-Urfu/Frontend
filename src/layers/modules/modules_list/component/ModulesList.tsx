import React, { FC, useEffect, useState } from 'react';
import style from './ModulesList.module.scss';
import { Link, useFetcher, useLoaderData, useLocation, useParams } from 'react-router-dom';
import { IModulesListData } from '../types/IModulesListData';
import ModuleItem from '../../../components/module_item/ModuleItem';
import Button from '../../../ui/button/Button';
import btnStyles from '../../../ui/button/Button.module.scss';
import RemoveButton from '../../../components/remove_btn/component/RemoveButton';
import { IModuleItem } from '../../../components/module_item/types/IModuleItem';
import { store } from '../../../..';
import { UserType } from '../../../../types/userType';

interface IModulesListProps {
  modules: IModuleItem[]
  setModules: (modules: IModuleItem[]) => void
}

const ModulesList: FC<IModulesListProps> = ({ modules, setModules }) => {
  const location = useLocation();
  const userType = store.user?.userType;
  const { courseId } = useParams();

  return (
    <ul className={style.list}>
      {
        modules && (
          modules.map(moduleItem =>
            <li className={style.item} key={moduleItem.id}>
              <ModuleItem item={moduleItem} />
              {
                userType == UserType.teacher && location.pathname.includes('Editor') && (
                  <RemoveButton path={`chapters/${moduleItem.id}`} setEntities={setModules} entities={modules} id={moduleItem.id}
                    redirectPath={`/courseEditor/${courseId}`}
                  />
                )
              }
            </li>
          )
        )
      }
    </ul>
  );
};

export default ModulesList;