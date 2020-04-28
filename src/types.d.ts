type TodoList = {
  text: string;
  complete: boolean;
};

type Toggle = (selectedItem: TodoList) => void;

type AddTodo = (todo: string) => void;
