import React from 'react';
import { TodoListItem } from './TodoListItem';

interface IProps {
  todos: TodoList[];
  toggle: Toggle;
}

export const TodoList: React.FC<IProps> = ({ todos, toggle }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoListItem key={todo.text} todo={todo} toggle={toggle} />;
      })}
    </ul>
  );
};
