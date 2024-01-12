import React, { FC, useEffect, useState } from 'react';
import { useFetcher, useLoaderData, useParams } from 'react-router-dom';
import { IGroupListItem } from '../../../types/IGroupList';
import style from './GroupsList.module.scss';
import { NavLink } from 'react-router-dom';
import { IGroupsList } from '../types/IGroupsList';
import { store } from '../../../../../..';
import { INewGroupsListItem } from '../../../types/INewGroupsListItem';
import RemoveButton from '../../../../../components/remove_btn/component/RemoveButton';
import { setgroups } from 'process';

const GroupsList:FC = () => {
  const fetcher = useFetcher<IGroupListItem[]>();
  const { userId } = useParams();
  const [groups, setGroups] = useState<IGroupListItem[]>([]);

  useEffect(() => {
    if (userId != null && fetcher.state == 'idle') {
      fetcher.load(`/groupsList/${userId}`)
    }
  }, [userId])

  useEffect(() => {
    setGroups(fetcher.data ?? [])
  }, [fetcher])

  return (
    <ul>
    {
      groups.map((item) => (
        <li className={style.item} key={item.id}>
          <NavLink className={({ isActive, isPending }) =>
            isActive ? [style.link, style.active].join(' ') : style.link}
            to={`info/${item.id}`}
          >
            {item.groupName}
          </NavLink>
          <RemoveButton path={`groups/${item.id}`} setEntities={setGroups} entities={groups} id={item.id} redirectPath={`/profile/${userId}/groups`}/>
        </li>
      ))
    }
  </ul>
  );
};

export default GroupsList;