import { observer } from 'mobx-react-lite';
import React, { ButtonHTMLAttributes, FC, useContext, useRef, useState } from 'react';
import { AuthContext } from '../..';
import style from './Header.module.scss';
import Modal from '../../layers/ui/modal/Modal';
import SiteNav from '../../layers/components/site_nav/SiteNav';
import styleBtn from '../../layers/ui/button/Button.module.scss';
import Button from '../../layers/ui/button/Button';
import { Form, Link } from 'react-router-dom';
import LoginForm from '../../layers/modules/login_form/components/form/LoginForm';
import Registration from '../../layers/modules/RegistrationForm/components/form/Registration';
import RegistrationForm from '../../layers/modules/RegistrationForm/components/form/Registration';
import DropDownMenu from '../../layers/ui/drop-down_menu/DropDownMenu';

const Header:FC = observer(() => {
  const [isvisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<string>('');
  const [isVisibleDropDown, setIsVisibleDropDown] = useState<boolean>(false);
  const store = useContext(AuthContext)
  function authBtnClickHandler(contentType: string) {
    setActiveModal(contentType)
    setIsVisibleModal(true)
  }

  return (
    <header className={style.header}>
      {
        !store.isAuth && (
        <Modal visible={isvisibleModal} setVisible={setIsVisibleModal}>
          { activeModal == 'login' ? <LoginForm activeModal={activeModal} setActiveModal={setActiveModal} setIsVisibleModal={setIsVisibleModal}/> 
            : <RegistrationForm activeModal={activeModal} setActiveModal={setActiveModal} setIsVisibleModal={setIsVisibleModal}/> }
        </Modal>
        )
      }
      <div className={[style.headerContainer, "_container"].join(' ')}>
        <div className={style.logo}>
          <Link to={'/'} className={style.logoLink}>
            <img src={require('./img/logo-icon.svg').default} alt='logo' className={style.logoImg}/>
          </Link>
        </div>
        <div className={style.links}>
          <SiteNav styles={[style.nav]}/>
          { !store.isAuth ? (
            <div className={style.authLinks}>
              <Button 
                type="button" 
                styles={[styleBtn.authBtn]} 
                onClick={ () => {authBtnClickHandler('login')}}
              >
                Вход
              </Button>
              <Button 
                type="button" 
                styles={[styleBtn.authBtn]} 
                onClick={ () => {authBtnClickHandler('registration')}}
              >
                Регистрация
              </Button>
            </div>
          )
          : 
          <div 
            className={style.profileLink}
            onMouseOver={ () => setIsVisibleDropDown(true)}
            onMouseOut={ () => setIsVisibleDropDown(false)}
            >
            <Link to={`/profile/${store.user?.id}`}>
              <img src={require("./img/profile-icon.svg").default} alt='profile icon'/>
            </Link>
            <DropDownMenu isVisible={isVisibleDropDown} styles={[style.menu]} setIsVisible={setIsVisibleDropDown}>
                <ul className={style.profileMenuList}>
                  <li className={style.profileMenuItem}>
                    <Form method='POST' action='logout'>
                      <Button type='submit'>
                        Выйти
                      </Button>
                    </Form>
                  </li>
                  <li className={style.profileMenuItem}>
                    <Link to={`/profileEdit`}>
                      Настройки профиля
                    </Link>
                  </li>
                </ul>
              </DropDownMenu>
          </div>
          }
        </div>
      </div>
    </header>
  );
});

export default Header;