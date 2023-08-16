import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { TodoEntity } from "../features/todos/todos.slice";

function ListOfTodos() {
  const { todos } = useAppSelector((state) => state);
  const { loading, data, error } = todos;

  return (
    <div className="mt-4 p-2 bg-light">
      <p>Error says : {error}</p>
      <p>Loading says : {loading ? "IsLoading" : "IsNotLoading"}</p>
      List Of Todos
      <h4>Todo Items [{data.length}]</h4>
      {data.map((todo: TodoEntity, key: number) => {
        return (
          <div key={key} className="border roounded bg-dark text-white p-3">
            <p>Todo: {todo.todo}</p>
            <p>Is Completed: {todo.completed ? "Yes" : "No"}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ListOfTodos;
