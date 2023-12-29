import "./App.css";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import TodoInput from "./components/todoInput/todoInput";
import TodoList from "./components/todoList/todoList";
import { v4 as uuidv4 } from "uuid";
import useLocaleStorage from "./helpers/useLocaleStorage";
import { TODOS_DATA } from "./helpers/dataList";

function App() {
  const [todos, setTodos] = useLocaleStorage(TODOS_DATA);
  const addNewTodo = (text) => {
    setTodos([
      {
        id: uuidv4(),
        text: text,
        completed: false,
      },
      ...todos,
    ]);
    toast.success("Task added successfully");
  };
  const updateTodo = (id, updatedTask) => {
    setTodos((updatedTodos) =>
      updatedTodos.map((todo) =>
        todo.id === id ? { ...todo, text: updatedTask } : todo
      )
    );
    toast.success("Task Updated successfully");
  };
  const deleteTodo = (todoId) => {
    setTodos((curr) => curr.filter((todo) => todo.id !== todoId));
    toast.success("Todo Deleted Successfully");
  };
  const completeTodo = (todoId) => {
    setTodos((curr) =>
      curr.map((todo) =>
        todo.id === todoId
          ? { ...todo, completed: todo.completed ? false : true }
          : todo
      )
    );
  };

  return (
    <>
      <div className="App">
        <h1>todo app</h1>
        <TodoList
          todos={todos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />

        <TodoInput addNewTodo={addNewTodo} />
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontSize: "1.2rem",
          },
        }}
      />
    </>
  );
}

export default App;
