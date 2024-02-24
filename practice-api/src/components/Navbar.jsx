import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteItem, getItem } from "../helpers/persistance-storage";
import { logoutUser } from "../slice/auth";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = getItem("token");
  const logoutHandle = () => {
    dispatch(logoutUser());
    deleteItem("token");
    navigate("/login");
  };

  return (
    <header className="container mx-auto flex flex-wrap items-center justify-between px-10 py-3 mb-4 border-b">
      <Link className="text-xl font-bold tracking-tight" to={"/"}>
        MyArticles
      </Link>
      <nav className="md:w-1/4 flex items-center justify-end">
        {token ? (
          <div className="flex items-center space-x-4">
            <p className="text-gray-800 mr-2">{token}</p>
            <Link
              to={"/create-todo"}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Create ToDo
            </Link>
            <button
              onClick={logoutHandle}
              className="bg-transparent text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-100"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Link
              to={"/login"}
              className="text-blue-500 border border-blue-500 px-4 py-2 rounded hover:bg-blue-100"
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
