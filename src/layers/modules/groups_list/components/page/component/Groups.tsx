import React, { FC, useEffect, useRef, useState } from 'react';
import style from './Groups.module.scss';
import { Form, Outlet, useFetcher, useLoaderData } from 'react-router-dom';
import { IGroupListItem } from '../../../types/IGroupList';
import { NavLink } from 'react-router-dom';
import Input from '../../../../../ui/input/Input';
import Button from '../../../../../ui/button/Button';
import GroupsList from '../../groups_list/component/GroupsList';
import formStyles from '../../../../../../root/scss/Form.module.scss';
import { AxiosResponse } from 'axios';

const Groups: FC = () => {
  const groupNameInput = useRef<HTMLInputElement>(null);
  const fetcher = useFetcher<AxiosResponse>();

  useEffect(() => {
    if (groupNameInput.current != null) {
      groupNameInput.current.value = ''
    }
  }, [fetcher]);

  return (
    <div className={style.groupList}>
      <div className={style.groupListContainer}>
        <div className={style.sideBar}>
          <fetcher.Form method='POST' action='createGroup' className={[formStyles.createEntityForm, style.createGroupForm].join(' ')}>
            <input ref={groupNameInput} type='text' name={'groupName'} placeholder={'Новая группа'} defaultValue={''}
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                if (groupNameInput.current != undefined) {
                  groupNameInput.current.value = ev.target.value;
                }
              }}
            />
            <Button type='submit' styles={[]}>
              +
            </Button>
          </fetcher.Form>
          <GroupsList/>
        </div>
        <div className={style.content}>
        <Outlet/>          
        </div>
      </div>
    </div>
  );
};

export default Groups;