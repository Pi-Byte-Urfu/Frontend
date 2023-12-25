import React, { FC, useState } from 'react';
import rootStyles from '../page/ProfileEditor.module.scss';
import InputPassword from '../../../../ui/input_password/InputPassword';
import { Form, useFetcher } from 'react-router-dom';
import Button from '../../../../ui/button/Button';
import { validatePassword } from '../../helpers/validation/validatePassword';
import style from './ChangePassword.module.scss';

const ChangePassword: FC = () => {
  const [formStatus, setFormStatus] = useState<boolean>(false);
  const fetcher = useFetcher<string>();
  
  return (
    <fetcher.Form className={rootStyles.passwordForm} method='POST' action='editPassword'>
      <div className={rootStyles.inputList}>
        <InputPassword name='oldPassword' styles={[rootStyles.passwordInput]} type='password' defaultValue='' placeholder='Старый пароль'
          validateInput={validatePassword}
          setFormStatus={setFormStatus}
        />
        <InputPassword name='newPassword' styles={[rootStyles.passwordInput]} type='password' defaultValue='' placeholder='Новый пароль'
          validateInput={validatePassword}
          setFormStatus={setFormStatus}
        />
        <InputPassword name="confirmPassword" styles={[rootStyles.passwordInput]} type='password' defaultValue='' placeholder='Подтвердите пароль' 
        />
      </div>
      {
        fetcher.data && (
          <div className={style.errorMessage}>
            {fetcher.data}
          </div>
        )
      }
      <div className={rootStyles.formButtons}>
        <Button type='submit' styles={[rootStyles.dataSaveBtn]} disabled={!formStatus}>
          Сохранить
        </Button>
      </div>
    </fetcher.Form>
  );
};

export default ChangePassword;