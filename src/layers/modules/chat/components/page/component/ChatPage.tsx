import React, { useState } from 'react';
import style from './ChatPage.module.scss';
import { IMessage } from '../../../types/IMessage';
import { Outlet, useFetcher } from 'react-router-dom';
import { INewMessage } from '../../../types/INewMessage';

const ChatPage = () => {
  const [lastMessage, setLastMessage] = useState<IMessage>();
  const newMessageFetcher = useFetcher<INewMessage>();

  return (
    <div className={style.chatPage}>
      <div  className={style.chatNavigation}>
        
      </div>
      <div className={style.chatContent}>
        <Outlet/>
      </div>
    </div>
  );
};

export default ChatPage;