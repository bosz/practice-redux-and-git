import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addTodoThunk } from "../features/todos/todos.thunk";

function NewTodo() {
  const [text, setText] = useState<string>("");
  const { loading } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  const addTodo = () => {
    dispatch(addTodoThunk(text));
    setText("");
  };
  return (
    <div className="border p-3 bg-light">
      <input
        className="form-control mb-2"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        disabled={loading}
        className=" btn-block btn btn-success"
        onClick={addTodo}
      >
        {loading ? "Saving..." : "Add Todo Item"}
      </button>
    </div>
  );
}

export default NewTodo;
