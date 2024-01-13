import React, { FC, useEffect, useState } from 'react';
import style from './ChatNavItem.module.scss';
import { useFetcher } from 'react-router-dom';
import { IMessage } from '../../../types/IMessage';

interface IChatNavItemProps {
  chatId: number
  userPhoto: string
  userFullname: string
  lastMessageId: number
}

const ChatNavItem:FC<IChatNavItemProps> = ({userPhoto, userFullname, lastMessageId, chatId}) => {
  const fetcher = useFetcher<IMessage>();
  const [messageText, setMessageText] =  useState<string>('');
  const [data, setData] = useState<Date>();

  useEffect(() => {
    if (fetcher.state == 'idle') {
      fetcher.load(`message/${lastMessageId}`)
    }
  }, [chatId]);

  useEffect(() => {
    if (fetcher.data) {
      setMessageText(fetcher.data.messageText);
      setData(new Date(fetcher.data.createdAt));
    }
  }, [fetcher])
  return (
    <div className={style.navItem}>
      <div className={style.photo}>
        <img src={userPhoto} alt='photo'/>
      </div>
      <div className={style.content}>
        <div className={style.header}>
          <div className={style.fullName}>
            {userFullname}
          </div>
          {
            fetcher.data && (
              <div className={style.data}>
                
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default ChatNavItem;