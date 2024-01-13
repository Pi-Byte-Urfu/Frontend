import React, { FC, useEffect, useState } from 'react';
import style from './ModulePageNavigation.module.scss';
import StepsList from '../../../../modules/steps_list/component/StepsList';
import { IStepItem } from '../../../../components/step_item/types/IStepItem';
import { useFetcher, useParams } from 'react-router-dom';
import { IStepsList } from '../../../../modules/steps_list/types/IStepsList';
import ReturnButton from '../../../../components/return_button/ReturnButton';

interface IModulePageNavigationProps {
  moduleName: string
}

const ModulePageNavigation:FC<IModulePageNavigationProps> = ({moduleName}) => {
  const { courseId } = useParams();
  const [steps, setSteps] = useState<IStepItem[]>([]);
  const stepsFetcher = useFetcher<IStepsList>();
  const { moduleId } = useParams();

  useEffect(() => {
    if (stepsFetcher.state == 'idle' && moduleId != undefined) {
      stepsFetcher.load(`/stepsList/${moduleId}`);
    }
  }, [moduleId]);

  useEffect(() => {
    if (stepsFetcher.data) {
      setSteps(stepsFetcher.data.coursePages);
    }
  }, [stepsFetcher]);

  return (
    <div className={style.nav}>
      <div className={style.navHeader}>
        <h1 className={style.moduleName}>
          {moduleName}
        </h1>
      </div>
      <StepsList steps={steps} setSteps={setSteps}/>
      <div className={style.backButton}>
        <ReturnButton path={`/course/${courseId}`} text={'Обратно к модулям'}/>
      </div>
    </div>
  );
};

export default ModulePageNavigation;