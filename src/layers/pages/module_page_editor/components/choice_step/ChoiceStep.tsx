import React, { FC } from 'react';
import { useFetcher } from 'react-router-dom';
import Input from '../../../../ui/input/Input';
import { StepType } from '../../../../../types/stepType';
import FormField from '../../../../components/form_field/FormField';
import style from './ChoiceStep.module.scss';
import { createNamedExports } from 'typescript';

const ChoiceStep: FC = () => {

  return (
    <div className={style.content}>
      <h2 className={style.title}>
        Выбор активности
      </h2>
      <div className={style.formFields}>
        <div className={style.formField}>
          <div className={style.formFieldContainer}>
            <label className={style.label}>
              <div className={style.labelBody}>
                <div className={style.img}>
                  <img src={require('./img/theory.svg').default} alt='Теория' />
                </div>
                <div className={style.text}>
                  Теория
                </div>
              </div>
              <Input type='radio' defaultValue={StepType.Theory} name='pageType' form='createStep' styles={[style.input]} checked={true} />
            </label>
          </div>
        </div>
        <div className={style.formField}>
          <div className={style.formFieldContainer}>
            <label className={style.label}>
              <div className={style.labelBody}>
                <div className={style.img}>
                  <img src={require('./img/test.svg').default} alt='тест' />
                </div>
                <div className={style.text}>
                  Тест
                </div>
              </div>
              <Input type='radio' defaultValue={StepType.Test} name='pageType' form='createStep' styles={[style.input]} />
            </label>
          </div>
        </div>
        <div className={style.formField}>
          <div className={style.formFieldContainer}>
            <label className={style.label}>
              <div className={style.labelBody}>
                <div className={style.img}>
                  <img src={require('./img/task.svg').default} alt='Задача' />
                </div>
                <div className={style.text}>
                  Задача
                </div>
              </div>
              <Input type='radio' defaultValue={StepType.Task} name='pageType' form='createStep' styles={[style.input]} />
            </label>
          </div>
        </div>
      </div>      
    </div>

  );
};

export default ChoiceStep;