import React, { FC } from 'react';
import style from './ReturnButton.module.scss';
import { Link } from 'react-router-dom';
import { text } from 'node:stream/consumers';

interface ReturnButtonProps {
  path: string,
  text: string
}

const ReturnButton:FC<ReturnButtonProps> = ({path, text}) => {

  return (
    <Link to={path} className={style.link}>
      <div className={style.icon}>
        <img src={require('./return-icon.png')} alt='icon'/>
      </div>
      <div className={style.text}>
        {text}
      </div>
    </Link>
  );
};

export default ReturnButton;