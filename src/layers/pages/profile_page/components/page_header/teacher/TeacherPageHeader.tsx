import React, { FC } from 'react';
import mainStyles from '../ProfilePageHeader.module.scss';
import style from './TeacherPageHeader.module.scss';
import { Form, NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '../../../../../ui/button/Button';

const TeacherPageHeader:FC = () => {
  return (
    <div className={[mainStyles.header, style.header].join(' ')}>
      <nav className={mainStyles.nav}>
        <ul className={mainStyles.navList}>
          <li className={mainStyles.navItem}>
            <NavLink to={`courses`}
              className={({isActive, isPending}) => isActive ? mainStyles.activeLink : ''}
            >
              Мои курсы
            </NavLink>
          </li>
          <li className={mainStyles.navItem}>
            <NavLink to={`groups`}
              className={({isActive, isPending}) => isActive ? mainStyles.activeLink : ''}
            >
              Мои группы
            </NavLink>
          </li>
          <li className={mainStyles.navItem}>
            <NavLink to={`chats`}
              className={({isActive, isPending}) => isActive ? mainStyles.activeLink : ''}
            >
              Вопросы учеников
            </NavLink>
          </li>
        </ul>
      </nav>
      <ul className={style.toolPanel}>
        <li className={style.toolPanelItem}>
          <Form method='POST' action='/createCourse' className={style.createCourseForm}>
            <Button type='submit' styles={[style.createBtn]}>
              <span className={style.plus}>+</span> cоздать курс
            </Button>
          </Form>
        </li>
      </ul>
    </div>
  );
};

export default TeacherPageHeader;