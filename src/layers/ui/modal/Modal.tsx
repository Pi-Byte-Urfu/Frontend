import React, { FC, PropsWithChildren, useContext } from 'react';
import { AuthContext } from '../../..';
import style from './ModalWindow.module.scss';

interface IModalProps {
  visible: boolean
  setVisible(currentState:boolean):void
}

const Modal:FC<PropsWithChildren<IModalProps>> = ({visible, setVisible, children}) => {
  const store = useContext(AuthContext);
  let classNames = [style.modalWindow];

  if (visible && !store.user) {
    classNames.push(style.active)
  }

  return (
    <div className={classNames.join(' ')}>
      <div className={style.content}>
        <div className={style.closeBtn} onClick={() => setVisible(false)}>
          <div className={style.closeBtnFirstLine}></div>
          <div className={style.closeBtnSecondLine}></div>        
        </div>
        {children}
      </div>      
    </div>

  );
};

export default Modal;