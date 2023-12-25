import React, { FC, useRef, useState } from 'react';
import style from './Registration.module.scss';
import FormField from '../../../../components/form_field/FormField';
import Input from '../../../../ui/input/Input';
import { Form, useFetcher } from 'react-router-dom';
import Button from '../../../../ui/button/Button';
import formFieldStyles from '../../../../components/form_field/FormField.module.scss';
import btnStyles from '../../../../ui/button/Button.module.scss';
import inputStyles from '../../../../ui/input/Input.module.scss';
import { UserType } from '../../../../../types/userType';
import { validatePassword } from '../../helpers/validation/validatePassword';
import { validateEmail } from '../../helpers/validation/validateEmail';

interface IRegistrationProps {
  activeModal: string
  setActiveModal(currentState: string): void
  setIsVisibleModal(currentState: boolean): void
}

const RegistrationForm: FC<IRegistrationProps> = ({ activeModal, setActiveModal, setIsVisibleModal }) => {
  const [userType, setUserType] = useState('')
  const ref = useRef<HTMLDivElement>(null)
  const [formStatus, setFormStatus] = useState<boolean>(false);
  const fetcher = useFetcher();

  function clickHandler(ev: any) {
    if (!ev.target.classList.contains(style.radioInput)) {
      return
    }
    if (ref.current !== null) {
      ref.current.style.position = 'relative'
      ref.current.classList.add(style.actives)
      const radioBtn = ev.target.querySelector('input')
      ref.current.style.right = '100%'
      radioBtn.click();
    }
  }

  return (
    <div className={style.register}>
      <div className={style.registerContainer}>
        <h2 className={[style.title].join(' ')}>
          Регистрация
        </h2>
        <div className={style.registerContainerContent} ref={ref}>
          <div className={[style.registerContainerColumn, style.registerContainerColumnRadio].join(' ')}
            onClick={clickHandler}
          >
            <FormField styles={[style.formFieldRadio]} textLabel='Я ученик'>
              <div className={[style.radioInput, style.radioInputStudent].join(' ')}>
                <Input type='radio' name='userType' styles={[]} defaultValue={UserType.student} form='registrationForm' />
              </div>
            </FormField>
            <FormField styles={[style.formFieldRadio]} textLabel='Я учитель'>
              <div className={[style.radioInput, style.radioInputTeacher].join(' ')}>
                <Input type='radio' name='userType' styles={[]} defaultValue={UserType.teacher} form='registrationForm' />
              </div>
            </FormField>
          </div>
          <div className={style.registerContainerColumn}>
            <fetcher.Form className={style.form} method='POST' action='/registration' id='registrationForm'>
              <div className={style.formFields}>
                <FormField styles={[formFieldStyles.authFormField, style.formField]}
                  textLabel='Почта'
                >
                  <Input type='email' name='email' styles={[inputStyles.authInput]} placeholder='Введите почту' defaultValue='' 
                    setFormStatus={setFormStatus}
                    validateInput={validateEmail}
                  />
                </FormField>
                <FormField styles={[formFieldStyles.authFormField, style.formField]}
                  textLabel='Пароль'
                >
                  <Input type='password' name='password' styles={[inputStyles.authInput]} placeholder='Придумайте пароль' defaultValue='' 
                    setFormStatus={setFormStatus}
                    validateInput={validatePassword}
                  />
                </FormField>
              </div>
              {fetcher.data != null && (
                <div className={style.errorMessage}>
                  {fetcher.data}
                </div>
              )}
              <div className={style.formButtons}>
                <Button type='submit' styles={[btnStyles.authSubmitBtn]}
                  disabled={!formStatus}
                >
                  Зарегистрироваться
                </Button>
              </div>
            </fetcher.Form>
            <div className={style.footer}>
              <div className={style.footerLabel}>
                Уже есть аккаунт?
                <Button type="submit" styles={[style.redirectLink, btnStyles.redirectModalBtn]} onClick={() => setActiveModal('login')}
                >
                  Войти
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;