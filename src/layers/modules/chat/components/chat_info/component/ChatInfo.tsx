import React from 'react';
import style from './ChatInfo.module.scss';
import { useFetcher, useParams } from 'react-router-dom';
import { INewMessage } from '../../../types/INewMessage';

const ChatInfo = () => {
  const {userId, chatId} = useParams();
  const newMessageFetcher = useFetcher<INewMessage>();
  
  return (
    <div>
      
    </div>
  );
};

export default ChatInfo;