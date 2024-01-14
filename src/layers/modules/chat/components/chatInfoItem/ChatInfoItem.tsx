import React, { FC, useEffect, useState } from 'react';
import style from './ChatInfoItem.module.scss';
import { IUserResponse, getUser } from './api/getUser';
import { IUser } from '../../../../../types/IUser';
import { useParams } from 'react-router-dom';

interface IChatInfoItemProps {
  userId: number
  createdAt: number
  messageText: string
}

const ChatInfoItem:FC<IChatInfoItemProps> = ({userId, createdAt, messageText}) => {
  const [date, setDate] = useState<string>('')
  const [user, setUser] = useState<IUserResponse>();
  async function fetchUser() {
    const response = await getUser(userId).then(res => setUser(res.data));
  }

  useEffect(() => {
    fetchUser();
    const obj = new Date(createdAt * 1000);
    setDate(`${obj.toLocaleString()}`)
  }, [createdAt])

  return (
    <div className={style.item}>
      <div className={style.photo}>
        <img src={user?.photoUrl} alt='photo'/>
      </div>
      <div className={style.content}>
        <div className={style.contentHeader}>
          <div className={style.name}>
            {user?.name}
          </div>
          <div className={style.date}>
            {date}
          </div>
        </div>
        <div className={style.messageText}>
          {messageText}
        </div>
      </div>
    </div>
  );
};

export default ChatInfoItem;