import React, { FC, useEffect } from 'react';
import style from './GroupConnect.module.scss';
import { useFetcher, useLocation, useParams } from 'react-router-dom';

const GroupConnect:FC = () => {
  const { groupId } = useParams();
  const fetcher = useFetcher<string>();
  const location = useLocation();
  useEffect(() => {
    if (fetcher.state == 'idle' && !fetcher.data) {
      fetcher.submit(location.pathname, {
        method: 'POST'
      });
    }
  }, [groupId])
  return (
    <div className={style.message}>
      <p>
       {!fetcher.data ? 'Загрузка...' : fetcher.data} 
      </p>
    </div>
  );
};

export default GroupConnect;