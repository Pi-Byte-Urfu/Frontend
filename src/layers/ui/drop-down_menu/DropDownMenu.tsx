import React, { FC, PropsWithChildren, useEffect } from 'react';
import style from './Drop-downMenu.module.scss';
import { IBaseComponentProps } from '../../../types/IBaseComponentProps';

interface IDropDownMenuProps extends IBaseComponentProps {
  isVisible: boolean,
  setIsVisible(currentState: boolean): void
}

const DropDownMenu:FC<PropsWithChildren<IDropDownMenuProps>> = ({isVisible, children, styles, setIsVisible}) => {
  styles.push(style.menu)
  if (isVisible) {
    styles.push(style.active)
  }
  const classNames = styles.join(' ')

  useEffect( () => {
    return () => {
      setIsVisible(false)
    }
  }, [])
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

export default DropDownMenu;