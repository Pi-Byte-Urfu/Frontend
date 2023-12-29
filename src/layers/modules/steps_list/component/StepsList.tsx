import React, { FC, useEffect } from 'react';
import style from './StepsList.module.scss'
import { useFetcher, useParams } from 'react-router-dom';
import { IStepsList } from '../types/IStepsList';
import StepItem from '../../../components/step_item/StepItem';
import { coreSystem } from '@mdxeditor/editor';

const StepsList:FC = () => {
  const fetcher = useFetcher<IStepsList>();
  const { moduleId } = useParams();
  useEffect(() => {
    if (fetcher.state == 'idle' && !fetcher.data && moduleId != undefined) {
      fetcher.load(`/stepsList/${moduleId}`)
    }
  })

  return (
    <ul className={style.list}>
      {
        fetcher.data && (
          fetcher.data.coursePages.map(step => (
            <li className={style.item} key={step.id}>
              <StepItem item={step}/>
            </li>
          ))
        )
      }
    </ul>
  );
};

export default StepsList;