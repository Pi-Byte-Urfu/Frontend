import React, { FC } from 'react';
import style from './StepItem.module.scss';
import { IStepItem } from './types/IStepItem';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

interface IStepItemProps {
  item: IStepItem
}

const StepItem:FC<IStepItemProps> = ({item}) => {
  return (
    <NavLink to={`step/${item.pageType}/${item.id}`} className={({isActive, isPending}) =>
      isActive ? [style.link, style.active].join(' ') : style.link
    }>
      {item.name}
    </NavLink>
  );
};

export default StepItem;