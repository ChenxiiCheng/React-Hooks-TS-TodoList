import React, { useState, Fragment } from 'react';
import { TodoList } from './components/TodoList';
import { AddTodoListForm } from './components/AddTodoListForm';

const initialTodos: TodoList[] = [
  {
    text: 'Hello World',
    complete: false,
  },
  {
    text: 'React TypeScript',
    complete: false,
  },
];

export const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggle: Toggle = (selectedItem) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedItem) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (todo: string) => {
    if (todo === '') return;
    const newTodoObj = {
      text: todo,
      complete: false,
    };
    setTodos([...todos, newTodoObj]);
  };

  return (
    <Fragment>
      <TodoList todos={todos} toggle={toggle} />
      <AddTodoListForm addTodo={addTodo} />
    </Fragment>
  );
};
