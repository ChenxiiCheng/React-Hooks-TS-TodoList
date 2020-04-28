import React from 'react';
import './TodoListItem.css';

interface IProps {
  todo: TodoList;
  toggle: Toggle;
}

export const TodoListItem: React.FC<IProps> = ({ todo, toggle }) => {
  return (
    <li>
      <label className={todo.complete ? 'complete' : undefined}>
        <input type="checkbox" onChange={() => toggle(todo)} />
        {todo.text}
      </label>
    </li>
  );
};
