import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import { useState } from "react";
function App() {
  const todosList = [new Todo("Learn React"), new Todo("Learn TypeScript")];
  const [todos, setTodos] = useState<Todo[]>(todosList);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((current) => {
      return current.concat(newTodo);
    });
  };

  const removeTodoHandler = (id: string) => {
    setTodos((current) => current.filter((item) => item.id !== id));
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onDelete={removeTodoHandler} />
    </div>
  );
}

export default App;
