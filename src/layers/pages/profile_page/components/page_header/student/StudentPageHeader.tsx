import React, { FC } from 'react';
import mainStyles from '../ProfilePageHeader.module.scss';
import style from './StudentPageHeader.module.scss';
import { NavLink } from 'react-router-dom';

const StudentPageHeader:FC = () => {
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
            <NavLink to={`questions`}
              className={({isActive, isPending}) => isActive ? mainStyles.activeLink : ''}
            >
              Вопросы учителю
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default StudentPageHeader;