import React, { FC } from 'react';
import style from './ModulePageNavigation.module.scss';
import StepsList from '../../../../modules/steps_list/component/StepsList';

interface IModulePageNavigationProps {
  moduleName: string
}

const ModulePageNavigation:FC<IModulePageNavigationProps> = ({moduleName}) => {

  return (
    <div className={style.nav}>
      <div className={style.navHeader}>
        <h1 className={style.moduleName}>
          {moduleName}
        </h1>
      </div>
      <StepsList/>
    </div>
  );
};

export default ModulePageNavigation;