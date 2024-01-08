import React, { FC, PropsWithChildren } from 'react';
import style from './FormField.module.scss';

interface IFormFieldProps {
  textLabel: string
  styles: string[]
}

const FormField:FC<PropsWithChildren<IFormFieldProps>> = ({textLabel, styles, children}) => {
  const classNames = styles.join(' ')
  return (
      <label className={classNames}>
        <div className={style.textLabel}>
          {textLabel}
        </div>
        {children}
      </label>      
  );
};

export default FormField;