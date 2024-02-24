import { configureStore } from "@reduxjs/toolkit";
import ToDoReducer from "../slice/todos";
import AuthReducer from "../slice/auth";

export default configureStore({
  reducer: {
    auth: AuthReducer,
    todo: ToDoReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
