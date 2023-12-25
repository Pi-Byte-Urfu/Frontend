import React, { FC, useEffect } from 'react';
import style from './ModuleEditor.module.scss';
import ModuleEditorNavigation from '../navigation/ModuleEditorNavigation';
import { useLoaderData } from 'react-router-dom';
import { createContext } from 'vm';

const ModuleEditor:FC = () => {

  return (
    <div className={style.page}>
      {/* <ModuleEditorNavigation navLinks={data.navLinks}/> */}
      <div className={style.body}>
        <div className={style.bodyContainer}>
          Описание модуля
        </div>
      </div>
    </div>
  );
};

export default ModuleEditor;