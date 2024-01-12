import React, { FC, useEffect } from 'react';
import style from './StepsList.module.scss'
import { useFetcher, useLocation, useParams } from 'react-router-dom';
import { IStepsList } from '../types/IStepsList';
import StepItem from '../../../components/step_item/StepItem';
import { coreSystem } from '@mdxeditor/editor';
import { IStepItem } from '../../../components/step_item/types/IStepItem';
import { store } from '../../../..';
import { UserType } from '../../../../types/userType';
import RemoveButton from '../../../components/remove_btn/component/RemoveButton';
import { NavLink } from 'react-router-dom';

interface IStepsListProps {
  steps: IStepItem[]
  setSteps: (steps: IStepItem[]) => void
}

const StepsList: FC<IStepsListProps> = ({ steps, setSteps }) => {
  const { moduleId, courseId } = useParams();
  const location = useLocation();

  return (
    <ul className={style.list}>
      {
        steps.length != 0 && (
          steps.map(step => (
            <li className={style.item} key={step.id}>
              <NavLink to={`step/${step.pageType}/${step.id}`} className={({ isActive, isPending }) =>
                isActive ? [style.link, style.active].join(' ') : style.link
              }>
                {step.name}
              </NavLink>
              {
                store.user?.userType == UserType.teacher && location.pathname.includes('Editor') && (
                  <RemoveButton path={`pages/${step.id}`} entities={steps} setEntities={setSteps} id={step.id} 
                    redirectPath={`/courseEditor/${courseId}/module/${moduleId}`}
                  />
                )
              }
            </li>
          ))
        )
      }
    </ul>
  );
};

export default StepsList;