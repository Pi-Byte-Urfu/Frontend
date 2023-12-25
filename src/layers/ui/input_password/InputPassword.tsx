import React, { FC, useEffect, useState } from 'react';
import style from './InputPassword.module.scss';
import Input from '../input/Input';
import { IValidateResponse } from '../input/IValidateResponse';

interface IInputPasswordProps {
  type: string
  styles: string[]
  name?: string,
  placeholder?: string
  defaultValue: any
  form?: string
  validateInput?: (value: string) => IValidateResponse
  setFormStatus?: (currentState: boolean) => void,
}

const InputPassword: FC<IInputPasswordProps> = ({ type, styles, name, placeholder, form, validateInput, setFormStatus}) => {
  const [buttonisActive, setButtonIsActive] = useState<boolean>(false);

  const classNames = styles.join(' ')

  return (
        <Input
          type={buttonisActive ? 'text' : type}
          styles={[classNames]}
          defaultValue={''}
          placeholder={placeholder}
          name={name}
          form={form}
          validateInput={validateInput}
          setFormStatus={setFormStatus}
        >
          {
          <button
            type='button'
            className={[style.button, buttonisActive ? style.active : ''].join(' ')}
            onClick={(ev) => { ev.stopPropagation(); setButtonIsActive(!buttonisActive) }}
          ></button>}
        </Input>
  );
};
export default InputPassword;