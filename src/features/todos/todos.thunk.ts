import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTodosThunk = createAsyncThunk(
  "/todos",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("https://dummyjson.com/todos");
      const response = await res.json();
      return response;
    } catch (ex) {
      return rejectWithValue(ex);
    }
  }
);

export const addTodoThunk = createAsyncThunk(
  "/todos/add",
  async (todoText: string, { rejectWithValue }) => {
    try {
      const res = await fetch("https://dummyjson.com/todos/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          todo: todoText,
          completed: false,
          userId: 5,
        }),
      });
      const response = await res.json();
      return response;
    } catch (ex) {
      return rejectWithValue(ex);
    }
  }
);
