import React, { FC, useEffect, useState } from 'react';
import { IUser } from './types/types';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

type UserItemPageParams = {
  id: string
}

const UserItemPage:FC = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const params = useParams<UserItemPageParams>();
  const navigate = useNavigate();

  useEffect( () => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
      setUser(response.data)  
    } catch(e) {
      console.log(e)
    }
  }
  return (
    <div>
      <button onClick={() => navigate('/users')}>Back</button>
      <h1>Страница пользователя {user?.name}</h1>
      <div>
        {user?.email}
      </div>
      <div>
        {user?.address.city}
      </div>
    </div>
  );
};

export default UserItemPage;