import React from 'react';
import style from './ChatsList.module.scss';
import { useLoaderData } from 'react-router-dom';
import { IMessage } from '../../../types/IMessage';
import { IChat } from '../../../types/IChat';
import { NavLink } from 'react-router-dom';
import ChatNavItem from '../../chatNavItem/component/ChatNavItem';

const ChatsList = () => {
  const messages = useLoaderData() as IChat[];

  return (
    <ul className={style.list}>
      {
        messages.length == 0 
          ? (
            <li className={style.empty} key={0}>
              У вас пока нет ни одного чата. Чат появляется в тот момент, когда ученик присоединяется к группе
            </li>
          )
          : messages.map(chat => (
            <li className={style.chatItem} key={chat.chatId}>
              <NavLink className={({isActive, isPending}) =>
                  isActive ? [style.link, style.active].join(' ') : style.link}
                  to={`info/${chat.chatId}`}
              >
                <ChatNavItem chatId={chat.chatId} userPhoto={chat.userPhoto} 
                  userFullname={`${chat.userName} ${chat.userSurname}`}
                  lastMessageId={chat.lastMessageId}
                />
              </NavLink>
            </li>
          ))
      }
    </ul>
  );
};

export default ChatsList;