import React, { FC, useContext, useEffect } from 'react';
import style from './GroupConnect.module.scss';
import { useFetcher, useLocation, useParams } from 'react-router-dom';
import { observe } from 'mobx';
import { observer } from 'mobx-react-lite';
import { AuthContext } from '../../../../../..';
import { Axios, AxiosResponse } from 'axios';

const GroupConnect:FC = () => {
  const { groupId } = useParams();
  const fetcher = useFetcher<string>();
  const location = useLocation();
  const store  = useContext(AuthContext);
  useEffect(() => {
    if (fetcher.state == 'idle' && !fetcher.data && store.isAuth) {
      fetcher.submit(location.pathname, {
        method: 'POST'
      });
    }
  }, [groupId])

  return (
    <div className={style.message}>
      {
        store.isAuth 
          ? (
              <p>
               {!fetcher.data ? 'Загрузка...' : fetcher.data} 
              </p>
          )
          : (
            <p>
              Чтобы присоединяется к группе, вы должны быть авторизованны как ученик
            </p>
          )
      }

    </div>
  );
};

export default GroupConnect;