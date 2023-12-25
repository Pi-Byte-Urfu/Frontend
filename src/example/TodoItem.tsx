import React, { FC, PropsWithChildren } from 'react';
import { ITodo } from './types/types';

interface ITodoProps {
  todo: ITodo
}

const TodoItem:FC<PropsWithChildren<ITodoProps>> = ({todo}) => {
  return (
    <div>
      <input type='checkbox' checked={todo.completed}/>
      {todo. id} . {todo.title}
    </div>
  );
};

export default TodoItem;