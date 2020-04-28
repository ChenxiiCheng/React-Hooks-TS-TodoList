import React, { ChangeEvent, useState, FormEvent } from 'react';

interface IProps {
  addTodo: AddTodo;
}

export const AddTodoListForm: React.FC<IProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // 调用父组件传来的方法, 把todo添加到父组件里的todos
    addTodo(todo);
    setTodo('');
  };

  return (
    <form>
      <input type="text" value={todo} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};
