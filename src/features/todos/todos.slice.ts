import { createSlice } from "@reduxjs/toolkit";
import { addTodoThunk, getTodosThunk } from "./todos.thunk";

export interface TodoEntity {
  id: number;
  todo: string;
  completed: boolean;
  userID: number;
}

export interface TodosState {
  data: TodoEntity[] | [];
  loading: boolean;
  error: string | null;
}

const initialState: TodosState = {
  data: [],
  loading: false,
  error: "",
};

const todosSlice = createSlice({
  name: "todosSlice",
  initialState: initialState,
  reducers: {
    resetTodosState: (state) => {
      state = initialState;
      return state;
    },
    editTodo: (state, action) => {
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder;
    builder.addCase(getTodosThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTodosThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload.todos;
      state.error = "";
    });
    builder.addCase(getTodosThunk.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      // state.error = action.payload as string;
      state.error = "Failed to load data";
    });

    builder.addCase(addTodoThunk.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addTodoThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = "";
      state.data = [payload, ...state.data];
    });
    builder.addCase(addTodoThunk.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      // state.error = action.payload as string;
      state.error = "Failed to load data";
    });
  },
});

export const { resetTodosState, editTodo, setLoading } = todosSlice.actions;
export default todosSlice.reducer;
