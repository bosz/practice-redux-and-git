import { useEffect } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import ListOfTodos from "./components/ListOfTodos";
import LogAllTodo from "./components/LogAllTodo";
import { useAppDispatch } from "./redux/hooks";
import { getTodosThunk } from "./features/todos/todos.thunk";

function App() {
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTodosThunk());
  }, [dispatch]);

  return (
    <div className="rounded m-2 border border-dark">
      <div className="p-3">
        <h1 className="mb-5 text-center text-danger">Welcome todo list</h1>
        <NewTodo />
        <ListOfTodos />
        <LogAllTodo />
      </div>
      <footer className="mt-5 text-center bg-dark text-white p-4">
        This is the footer
      </footer>
    </div>
  );
}

export default App;
