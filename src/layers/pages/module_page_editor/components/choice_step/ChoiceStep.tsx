import React, { ChangeEvent, FC, useState } from 'react';
import { useFetcher } from 'react-router-dom';
import Input from '../../../../ui/input/Input';
import { StepType } from '../../../../../types/stepType';
import FormField from '../../../../components/form_field/FormField';
import style from './ChoiceStep.module.scss';
import { createNamedExports } from 'typescript';
import btnStyles from '../../../../ui/button/Button.module.scss';

const ChoiceStep: FC = () => {
  let prevElem = document.querySelector(`.${style.formField}`);
  console.log(prevElem)
  async function clickHandler(ev: React.MouseEvent<HTMLDivElement>) {
    if (ev.currentTarget.classList.contains(style.active)) {
      return
    };
    ev.currentTarget.classList.add(style.active)
    if (prevElem != null) {
      prevElem.classList.remove(`${style.active}`);
      prevElem = ev.currentTarget;
      return
    } 
    prevElem = document.querySelector(`.${style.active}`);
    prevElem?.classList.remove(style.active);
    prevElem = ev.currentTarget
  }


  return (
    <div className={style.content}>
      <h2 className={style.title}>
        Выбор активности
      </h2>
      <div className={style.formFields}>
        <div className={[style.formField, style.active].join(' ')} onClick={clickHandler}>
          <div className={style.formFieldContainer}>
            <label className={style.label} onClick={(ev: React.MouseEvent<HTMLLabelElement>)=> {
              
            }}>
              <div className={style.labelBody}>
                <div className={style.img}>
                  <img src={require('./img/theory.svg').default} alt='Теория' />
                </div>
                <div className={style.text}>
                  Теория
                </div>
              </div>
              <Input type='radio' defaultValue={StepType.Theory} name='pageType' form='createStep' styles={[style.input]} checked={true} 
              />
            </label>
          </div>
        </div>
        <div className={style.formField} onClick={clickHandler}>
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
              <Input type='radio' defaultValue={StepType.Task} name='pageType' form='createStep' styles={[style.input]} 
              />
            </label>
          </div>
        </div>
      </div>
      <div className={style.buttons}>
        <button type='submit' form={'createStep'} className={btnStyles.blackBtn}>
          Создать шаг
        </button>
      </div>    
    </div>

  );
};

export default ChoiceStep;