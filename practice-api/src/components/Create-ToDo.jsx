import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  postTodoFailure,
  postTodoStart,
  postTodoSuccess,
} from "../slice/todos";
import ToDoService from "../service/todos";
import ToDoForm from "../UI/todo-form";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();
    const todo = { title: title, description: description };
    dispatch(postTodoStart());
    // const response = await ToDoService.showRole();
    try {
      const response = await ToDoService.postToDo(todo);

      dispatch(postTodoSuccess(response)); // Pass the response to the success action

      navigate("/");
    } catch (error) {
      dispatch(postTodoFailure(error.response.data)); // Pass the error response to the failure action
    }
  };

  const formProps = {
    title,
    setDescription,
    description,
    setTitle,
    formSubmit,
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold">Create Todo</h1>
      <div className="w-3/4 mx-auto">
        <ToDoForm {...formProps} />
      </div>
    </div>
  );
};

export default CreateTodo;
