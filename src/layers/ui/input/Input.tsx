import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import style from './Input.module.scss';
import { IValidateResponse } from './IValidateResponse';
import { Value } from 'sass';

interface IInputProps {
  type: string
  styles: string[]
  name?: string,
  placeholder?: string
  defaultValue: any
  form?: string
  validateInput?: (value: string) => IValidateResponse
  setFormStatus?: (currentState: boolean) => void,
  disabled?: boolean
}

const Input:FC<PropsWithChildren<IInputProps>> = ({type, styles, name, placeholder, defaultValue, form, validateInput, setFormStatus, children}) => {
  const [value, setValue] = useState<any>(defaultValue);
  const classNames = styles.join(' ')
  const [validateResponse, setValidateResponse] = useState<IValidateResponse>({isValidate: true, message: null});

  useEffect(() => {
    return () => {
      setValue(defaultValue)
    }
  }, [])

  return (
    <div className={style.container}>
      <div className={style.inputContainer}>
        <input 
          type={type} 
          className={classNames} 
          onChange={(ev) => {
            setValue(ev.target.value);
            if (validateInput != null && setFormStatus != undefined) {
              const response = validateInput(ev.target.value);
              setValidateResponse(response);
              setFormStatus(response.isValidate)   
            }
          }}
          value={value}
          placeholder={placeholder}
          name={name}
          form={form}
          />
          {children}        
      </div>
        {
          !validateResponse?.isValidate && (
          <div className={style.validateMessage}>
            {validateResponse?.message}
          </div>)
        }
    </div>

  );
};

export default Input;