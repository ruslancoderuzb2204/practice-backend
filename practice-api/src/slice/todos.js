import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: true,
  todo: [],
  todoDetail: null,
  error: false,
};
export const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getTodosStart: (state) => {
      state.isLoading = true;
    },
    getTodosSuccess: (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
    },
    getTodosFailure: (state, action) => {
      state.error = action.payload;
    },
    getTodoDetailStart: (state) => {
      state.isLoading = true;
    },
    getTodosDetailSuccess: (state, action) => {
      state.isLoading = false;
      state.todoDetail = action.payload;
    },
    getTodoDetailFailure: (state) => {
      state.isLoading = false;
    },
    postTodoStart: (state) => {
      state.isLoading = true;
    },
    postTodoSuccess: (state) => {
      state.isLoading = false;
    },
    postTodoFailure: (state) => {
      state.isLoading = false;
      state.error = "Error";
    },
  },
});

export const {
  getTodosStart,
  getTodosSuccess,
  getTodosFailure,
  getTodoDetailFailure,
  getTodoDetailStart,
  getTodosDetailSuccess,
  postTodoFailure,
  postTodoStart,
  postTodoSuccess,
} = TodoSlice.actions;
export default TodoSlice.reducer;
