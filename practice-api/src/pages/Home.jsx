import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getTodosStart,
  getTodosSuccess,
  getTodosFailure,
} from "../slice/todos"; // Importing action creators from slice

import { getItem } from "../helpers/persistance-storage";
import ToDoCard from "../components/ToDoCard";
import ToDoService from "../service/todos";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { todos } = useSelector((state) => state.todo);
  const token = getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getTodos = async () => {
    dispatch(getTodosStart());
    try {
      const response = await ToDoService.getToDos();
      dispatch(getTodosSuccess(response.todos));
    } catch (error) {
      dispatch(getTodosFailure());
    }
  };

  useEffect(() => {
    getTodos();
  }, [dispatch]); // Adding dispatch to dependency array to fix missing dependency warning

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return (
    <div className="container mx-auto">
      <div className="py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {todos?.map((item) => (
            <ToDoCard key={item.id} item={item} getTodos={getTodos} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
