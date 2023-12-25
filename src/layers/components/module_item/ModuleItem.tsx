import React, { FC } from 'react';
import { IModuleItem } from './types/IModuleItem';
import { Link } from 'react-router-dom';
import style from './ModuleItem.module.scss';

interface IModuleItemProps {
  item: IModuleItem,
}

const ModuleItem:FC<IModuleItemProps> = ({item}) => {
  return (
    <Link to={`module/${item.id}`} className={style.link}>
      {item.name}
    </Link>
  );
};

export default ModuleItem;