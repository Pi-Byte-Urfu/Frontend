import React, { FC, useEffect, useState } from 'react';
import { IUser } from './types/types';
import axios from 'axios';
import List from './List';
import UserItem from './UserItem';
import { useNavigate } from 'react-router-dom';

function UsersPage<FC>() {
  const [users, setTodos] = useState<IUser[]>([])
  const navigate = useNavigate();

  useEffect( () => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setTodos(response.data)  
    } catch(e) {
      console.log(e)
    }
  }
  
  return (
    <div>
      <List 
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} onClick={() => navigate(`/users/${user.id}`)}/>}
      />
    </div>
  );
}

export default UsersPage;