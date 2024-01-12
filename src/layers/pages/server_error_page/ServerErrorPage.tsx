import React, { FC } from 'react';
import style from './ServerErrorPage.module.scss';

const ServerErrorPage:FC = () => {
  return (
    <div className={style.block}>
      <div className={style.text}>
        Произошла непредвиденная ошибка 
      </div>
    </div>
  );
};

export default ServerErrorPage;