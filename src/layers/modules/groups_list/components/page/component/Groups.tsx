import React, { FC, useRef } from 'react';
import style from './Groups.module.scss';
import { Form, Outlet, useLoaderData } from 'react-router-dom';
import { IGroupListItem } from '../../../types/IGroupList';
import { NavLink } from 'react-router-dom';
import Input from '../../../../../ui/input/Input';
import Button from '../../../../../ui/button/Button';
import GroupsList from '../../groups_list/component/GroupsList';
import formStyles from '../../../../../../root/scss/Form.module.scss';

const Groups: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className={style.groupList}>
      <div className={style.groupListContainer}>
        <div className={style.sideBar}>
          <Form method='POST' action='createGroup' className={[formStyles.createEntityForm, style.createGroupForm].join(' ')}
          >
            <input type='text' name={'groupName'} placeholder={'Новая группа'} defaultValue={''}/>
            <Button type='submit' styles={[]}>
              +
            </Button>
          </Form>
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