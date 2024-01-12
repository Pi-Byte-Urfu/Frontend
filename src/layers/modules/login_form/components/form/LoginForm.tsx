import React, { FC, useState } from 'react';
import style from './LoginForm.module.scss';
import { Form, useActionData, useFetcher } from 'react-router-dom';
import Input from '../../../../ui/input/Input';
import Button from '../../../../ui/button/Button';
import btnStyles from '../../../../ui/button/Button.module.scss';
import FormField from '../../../../components/form_field/FormField';
import formFieldStyles from '../../../../components/form_field/FormField.module.scss';
import inputStyles from '../../../../ui/input/Input.module.scss';
import { loginAction } from '../../actions/LoginAction';
import { AxiosError, AxiosResponse } from 'axios';
import { ILoginData } from '../../types/ILoginData';
import { ILoginResponse } from '../../api/login';
import { validateEmail } from '../../helpers/validation/validateEmail';
import { validatePassword } from '../../helpers/validation/validatePassword';

interface ILoginForm {
  activeModal: string
  setActiveModal: (currentState: string) => void
  setIsVisibleModal: (currentState: boolean) => void
} 

const LoginForm:FC<ILoginForm> = ({activeModal, setActiveModal, setIsVisibleModal}) => {
  const [formStatus, setFormStatus] = useState<boolean>(false);
  const fetcher = useFetcher<AxiosResponse>();
  
  return (
    <div className={style.login}>
      <div className={style.loginContainer}>
        <h2 className={[style.title].join(' ')}>
          Вход
        </h2>
            <fetcher.Form className={style.form} method='POST' action='/login'>
              <div className={style.formFields}>
                <FormField styles={[formFieldStyles.authFormField, style.formField]}
                  textLabel='Почта'
                >
                  <Input type='text' name='email' styles={[inputStyles.authInput]} placeholder='Введите почту' defaultValue=''
                    validateInput={validateEmail}
                    setFormStatus={setFormStatus}
                  />
                </FormField>
                <FormField styles={[formFieldStyles.authFormField, style.formField]}
                  textLabel='Пароль'
                >
                  <Input type='password' name='password'styles={[inputStyles.authInput]} placeholder='Введите пароль' defaultValue=''
                    validateInput={validatePassword}
                    setFormStatus={setFormStatus}
                  />
                </FormField>
              </div>
              {fetcher.data?.status == 400 && (
                <div className={style.errorMessage}>
                  {fetcher.data.data.error_message}
                </div>
              )}

              <div className={style.formButtons}>
                <Button type='submit' styles={[btnStyles.authSubmitBtn]} disabled={!formStatus}
                >
                  Войти
                </Button>
              </div>
            </fetcher.Form>
            <div className={style.footer}>
              <div className={style.footerLabel}>
                Нет аккаунта?
                <Button type="button" styles={[style.redirectLink, btnStyles.redirectModalBtn]} onClick={() => setActiveModal('register')} >
                  Зарегистрироваться
                </Button>
              </div>
            </div>          
      </div>
    </div>
  );
};

export default LoginForm; 