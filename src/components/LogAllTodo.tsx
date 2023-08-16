import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setLoading } from "../features/todos/todos.slice";

function LogAllTodo() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.todos.loading);

  const dispatchSetLoading = () => {
    dispatch(setLoading(!loading));
  };
  return (
    <div>
      <button className="btn btn-warning" onClick={dispatchSetLoading}>
        Set Loading
      </button>
    </div>
  );
}

export default LogAllTodo;
