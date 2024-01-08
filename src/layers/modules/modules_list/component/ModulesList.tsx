import React, { FC, useEffect, useState } from 'react';
import style from './ModulesList.module.scss';
import { Link, useFetcher, useLoaderData, useParams } from 'react-router-dom';
import { IModulesListData } from '../types/IModulesListData';
import ModuleItem from '../../../components/module_item/ModuleItem';
import Button from '../../../ui/button/Button';
import btnStyles from '../../../ui/button/Button.module.scss';
import RemoveButton from '../../../components/remove_btn/component/RemoveButton';
import { IModuleItem } from '../../../components/module_item/types/IModuleItem';

const ModulesList:FC = () => {
  const { courseId } = useParams();
  const fetcher = useFetcher<IModulesListData>();
  const [modules, setModules] = useState<IModuleItem[]>([]);
  useEffect(() => {
    if (fetcher.state === 'idle' && !fetcher.data && courseId !== undefined) {
      fetcher.load(`/modulesList/${courseId}`)
    }

    if (fetcher.data != undefined) {
      setModules(fetcher.data.courseChapters)
    }
  }, [courseId, fetcher])

  return (
    <ul className={style.list}>
      {
        modules && (
          modules.map(moduleItem => 
            <li className={style.item} key={moduleItem.id}>
              <ModuleItem item={moduleItem}/>
              <RemoveButton path={`chapters/${moduleItem.id}`} setEntities={setModules} entities={modules} id={moduleItem.id}/>
            </li>  
          )
        )
      }
    </ul>
  );
};

export default ModulesList;