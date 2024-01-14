import React, { FC, useEffect, useState } from 'react';
import style from './ChatNavItem.module.scss';
import { useFetcher, useParams } from 'react-router-dom';
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
  const { userId } = useParams();

  useEffect(() => {
    if (fetcher.state == 'idle' && lastMessageId != -1) {
      fetcher.load(`/message/${lastMessageId}`)
    }
  }, [chatId]);

  useEffect(() => {
    if (fetcher.data) {
      setMessageText(fetcher.data.messageText);
      setData(new Date(fetcher.data.createdAt * 1000));
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
            lastMessageId != -1 && (
              <div className={style.data}>
                {
                  data?.toLocaleDateString()
                }
              </div>
            )
          }
        </div>
        <div className={style.lastMessage}>
          {
            lastMessageId == -1 ? 'Пустой чат' :
               userId != undefined && fetcher.data?.senderId == +userId
              ? `Вы: ${messageText}` : `${messageText}`
          }
        </div>
      </div>
    </div>
  );
};

export default ChatNavItem;