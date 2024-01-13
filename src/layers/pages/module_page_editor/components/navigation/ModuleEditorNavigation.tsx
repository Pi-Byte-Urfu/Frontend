import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import style from './ModuleEditorNavigation.module.scss';
import { Form, redirect, redirectDocument, useFetcher, useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom';
import Button from '../../../../ui/button/Button';
import StepsList from '../../../../modules/steps_list/component/StepsList';
import Input from '../../../../ui/input/Input';
import { Link } from 'react-router-dom';
import inputStyles from '../../../../ui/input/Input.module.scss';
import { IModuleData } from '../../types/IModuleData';
import formStyles from '../../../../../root/scss/Form.module.scss';
import { IStepsList } from '../../../../modules/steps_list/types/IStepsList';
import { IStepItem } from '../../../../components/step_item/types/IStepItem';
import { IStepResponse } from '../../types/IStep';
import { AxiosResponse } from 'axios';
import ReturnButton from '../../../../components/return_button/ReturnButton';

interface IModuleEditorNavigationProps {
  moduleName: string
}

const ModuleEditorNavigation: FC<IModuleEditorNavigationProps> = ({ moduleName }) => {
  const { moduleId, courseId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const moduleNameFethcer = useFetcher<IModuleData>();
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const saveModuleNameBtn = useRef<HTMLButtonElement>(null);
  const stepsFetcher = useFetcher<IStepsList>();
  const [steps, setSteps] = useState<IStepItem[]>([]);
  const newStepFetcher = useFetcher<AxiosResponse>();

  useEffect(() => {
    if (stepsFetcher.state == 'idle' && moduleId != undefined) {
      stepsFetcher.load(`/stepsList/${moduleId}`);
    }
  }, [moduleId]);

  useEffect(() => {
    if (stepsFetcher.data) {
      setSteps(stepsFetcher.data.coursePages);
      if (inputRef.current != null) {
        inputRef.current.value = '';
      }   
    }
  }, [stepsFetcher]);

  useEffect(() => {
    if (newStepFetcher.data?.status == 200 && inputRef.current != null) {
      inputRef.current.value = '';
    }
  }, [newStepFetcher]);

  return (
    <div className={style.nav}>
      <div className={style.navHeader}>
        <moduleNameFethcer.Form method='POST' action='updateModule' className={style.nameForm} ref={formRef}>
          <input type={'text'}
            defaultValue={moduleNameFethcer.data?.name ?? moduleName}
            name={"name"}
            placeholder='Измените название модуля'
            className={inputStyles.courseName}
            onChange={() => {
              if (saveModuleNameBtn.current != null) {
                saveModuleNameBtn.current.click()
              }
            }}
          />
          <button type='submit' className={style.saveName} ref={saveModuleNameBtn}>
          </button>
        </moduleNameFethcer.Form>
      </div>
      <StepsList steps={steps} setSteps={setSteps} />
      <newStepFetcher.Form method='POST' action='createStep' className={[formStyles.createEntityForm, style.createEntityForm].join(' ')} id="createStep">
        <input
          name="name"
          type='text' defaultValue={''}
          placeholder='Новый шаг'
          className={style.stepNameInput}
          onFocus={() => {
            if (!location.pathname.includes('choiceStep')) {
              navigate('choiceStep')
            }
          }}
          ref={inputRef}
        />
        <div className={style.createNavLinkBlock}>
          <span className={style.plus}>
            +
          </span>
        </div>
      </newStepFetcher.Form>
      <div className={style.backButton}>
        <ReturnButton path={`/courseEditor/${courseId}`} text='Обратно к модулям'/>
      </div>
    </div>
  );
};

export default ModuleEditorNavigation;