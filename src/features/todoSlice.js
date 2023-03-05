import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  lang: true,
};

const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    todoAdd: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },
    todoDelete: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    todoUpdate: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].done = true;
    },
    changeTR: (state) => {
      state.lang = false;
    },
    changeGB: (state) => {
      state.lang = true;
    },
  },
});

export const { todoAdd, todoDelete, todoUpdate, changeTR, changeGB } =
  todoSlice.actions;

export default todoSlice.reducer;
