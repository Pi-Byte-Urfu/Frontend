import React, { useEffect, useRef, useState } from 'react';
import style from './ChatInfo.module.scss';
import { useFetcher, useLocation, useParams } from 'react-router-dom';
import { INewMessage } from '../../../types/INewMessage';
import { IMessage } from '../../../types/IMessage';
import { $api } from '../../../../../../http';
import ChatInfoItem from '../../chatInfoItem/ChatInfoItem';

const ChatInfo = () => {
  const {userId, chatId} = useParams();
  const newMessageFetcher = useFetcher<IMessage>();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const messagesFethcer = useFetcher<IMessage[]>();
  const location = useLocation();
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (messagesFethcer.state == 'idle' && userId != undefined && chatId != undefined) {
      messagesFethcer.load(location.pathname);
      if (messageInputRef.current != null) {
        messageInputRef.current.value = ''
      }
    }
  }, [chatId, userId])

  useEffect(() => {
    if (messagesFethcer.data) {
      setMessages(messagesFethcer.data)
    }
  }, [messagesFethcer.data]);

  useEffect(() => {
  console.log(newMessageFetcher.data)
    if (newMessageFetcher.data) {
      setMessages([...messages, newMessageFetcher.data]);
      if (messageInputRef.current != null) {
        messageInputRef.current.value = '';
      }
    }
  }, [newMessageFetcher.data])

  return (
    <div className={style.messages}>
      <ul className={style.messagesList}>
        {
          messages.length == 0
            ? (
              <li className={style.empty} key={0}>
                В чате пока что нет ни одного сообщения
              </li>
            )
            : (
              messages?.map(message => (
                <li className={style.messageItem} key={message.messageId}>
                  <ChatInfoItem messageText={message.messageText} userId={message.senderId} createdAt={message.createdAt}/>
                </li>
              ))
            )
        }
      </ul>
      <div className={style.footer}>
        <newMessageFetcher.Form action='newMessage' method='POST'  className={style.newMessageForm}>
          <div className={style.formField}>
            <textarea className={style.newMessageInput} name='text' placeholder='Текст сообщения...'
              ref={messageInputRef}
            >

            </textarea>            
          </div>

          <button type='submit' className={style.submitBtn}>
            <img src={require('./send-icon.png')} alt='icon'/>
          </button>
        </newMessageFetcher.Form>
      </div>
    </div>
  );
};

export default ChatInfo;