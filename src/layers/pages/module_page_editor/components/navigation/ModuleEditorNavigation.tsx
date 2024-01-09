import React, { FC, useEffect, useRef } from 'react';
import style from './ModuleEditorNavigation.module.scss';
import { Form, redirect, redirectDocument, useFetcher, useLoaderData, useNavigate } from 'react-router-dom';
import Button from '../../../../ui/button/Button';
import StepsList from '../../../../modules/steps_list/component/StepsList';
import Input from '../../../../ui/input/Input';
import { Link } from 'react-router-dom';
import inputStyles from '../../../../ui/input/Input.module.scss';
import { IModuleData } from '../../types/IModuleData';
import formStyles from '../../../../../root/scss/Form.module.scss';

interface IModuleEditorNavigationProps {
  moduleName: string
}

const ModuleEditorNavigation:FC<IModuleEditorNavigationProps> = ({moduleName}) => {
  const navigate = useNavigate();
  const fetcher = useFetcher<IModuleData>(); 
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    return () => {
      if (inputRef.current != null) {
        console.log(inputRef.current.value)
        inputRef.current.value = ''; 
      } 
    }
  }, [])
  return (
    <div className={style.nav}>
      <div className={style.navHeader}>
      <fetcher.Form method='POST' action='updateModule' className={style.nameForm} ref={formRef}>
          <input type={'text'} 
            defaultValue={fetcher.data?.name ?? moduleName} 
            name={"name"} 
            placeholder='Измените название модуля' 
            className={inputStyles.courseName}
            />
            <button type='submit' className={style.saveName}>
              <img src={require('../../../../../static/icons/save-icon.svg').default}/>
            </button>
        </fetcher.Form>
      </div>
      <StepsList/>
      <Form method='POST' action='createStep' className={formStyles.createEntityForm} id="createStep">
        <input
          name="name" 
          type='text' defaultValue={''} 
          placeholder='Новый step'
          className={[style.moduleNameInput].join()} 
          onFocus={() => {
            navigate('choiceStep')
          }} 
          ref={inputRef}
        />
        <Button
          styles={[style.createNavLinkBtn]} 
          type='submit'
        >
          <span className={style.plus}>+</span>
        </Button>
      </Form>
    </div>
  );
};

export default ModuleEditorNavigation;