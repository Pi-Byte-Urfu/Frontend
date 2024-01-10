import React, { FC, PropsWithChildren, useContext, useEffect } from 'react';
import { AuthContext } from '../../..';
import style from './ModalWindow.module.scss';

interface IModalProps {
  visible: boolean
  setVisible(currentState:boolean):void
}

const Modal:FC<PropsWithChildren<IModalProps>> = ({visible, setVisible, children}) => {
  const store = useContext(AuthContext);
  let classNames = [style.modalWindow];

  if (visible) {
    classNames.push(style.active)
  }
  useEffect(() => {
    return () => {
      setVisible(false)
    }
  }, [])
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