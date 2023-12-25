import React, { FC } from 'react';
import style from './SiteNav.module.scss';
import Button from '../../ui/button/Button';
import btnStyles from '../../ui/button/Button.module.scss';

interface ISiteNav {
  styles: string[]
}

const SiteNav:FC<ISiteNav> = ({styles}) => {
  const classNames = [style.nav, ...styles].join(' ')
  return (
    <nav className={classNames}>
      <ul className={style.navList}>
        <li className={style.navItem}>
          <Button styles={[btnStyles.navBtn]} type='button'>
            Возможности
          </Button>
        </li>
        <li className={style.navItem}>
          <Button styles={[btnStyles.navBtn]} type='button'>
            Наши решения
          </Button>
        </li>
        <li className={style.navItem}>
          <Button styles={[btnStyles.navBtn]} type='button'>
            О нас
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default SiteNav;