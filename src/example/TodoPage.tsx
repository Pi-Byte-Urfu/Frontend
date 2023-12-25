import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { ITodo } from './types/types';
import List from './List';
import TodoItem from './TodoItem';

const TodoPage:FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect( () => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)  
    } catch(e) {
      console.log(e)
    }
  }
  
  return (
    <div>
      <List 
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
      />
    </div>
  );
};

export default TodoPage;