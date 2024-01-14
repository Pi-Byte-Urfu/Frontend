import React, { FC, Fragment, useContext, useEffect, useMemo, useState } from 'react';
import style from './GroupConnect.module.scss';
import { useFetcher, useLoaderData, useLocation, useParams } from 'react-router-dom';
import { observe } from 'mobx';
import { observer } from 'mobx-react-lite';
import { AuthContext, store } from '../../../../../..';
import { Axios, AxiosResponse } from 'axios';
import { UserType } from '../../../../../../types/userType';
import ReturnButton from '../../../../../components/return_button/ReturnButton';

const GroupConnect: FC = () => {
  const { groupId } = useParams();
  const data = useLoaderData() as string;
  const message = !store.isAuth || store.user?.userType == UserType.teacher ? 'Чтобы присоединиться к группе, вы должны быть авторизованны как ученик' : data;

  return (
    <div className={style.message}>
      {
        <p>
          {message}
        </p>
      }
      <div className={style.backButton}>
        <ReturnButton path='/' text='На главную'/>
      </div>
    </div>
  );
};

export default GroupConnect;