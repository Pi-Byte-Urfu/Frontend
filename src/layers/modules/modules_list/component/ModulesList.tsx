import React, { FC, useEffect } from 'react';
import style from './ModulesList.module.scss';
import { Link, useFetcher, useParams } from 'react-router-dom';
import { IModulesListData } from '../types/IModulesListData';
import ModuleItem from '../../../components/module_item/ModuleItem';

const ModulesList:FC = () => {
  const fetcher = useFetcher<IModulesListData>();
  const { courseId } = useParams();
  useEffect(() => {
    if (fetcher.state == 'idle' && !fetcher.data && courseId != undefined) {
      fetcher.load(`/modulesList/${courseId}`, {})
    }
  });
  
  return (
    <ul className={style.list}>
      {
        fetcher.data && (
          fetcher.data.modules.map(moduleItem => 
            <li className={style.link} key={moduleItem.id}>
              <ModuleItem item={moduleItem}/>
            </li>  
          )
        )
      }
    </ul>
  );
};

export default ModulesList;