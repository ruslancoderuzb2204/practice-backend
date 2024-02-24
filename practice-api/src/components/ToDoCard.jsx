import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TodoSlice } from "../slice/todos";

const ToDoCard = ({ item, getTodos }) => {
  const navigate = useNavigate();
  const { loggedIn, user } = useSelector((state) => state.auth);

  const deleteArticle = async (id) => {
    try {
      await TodoSlice.deleteToDo(id);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div key={item.id} className="col">
      <div className="card h-100 shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c"></rect>
        </svg>

        <div className="card-body">
          <p className="card-text m-0 fw-bold">{item.title}</p>
          <p>{item.description}</p>
        </div>
        <div className=" card-footer d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button
              onClick={() => navigate(`article/${item.id}`)}
              type="button"
              className="btn btn-sm btn-outline-secondary"
            >
              View
            </button>

            {loggedIn && user.username === item.author.username && (
              <>
                <button
                  onClick={() => navigate(`edit-article/${item.slug}`)}
                  type="button"
                  className="btn btn-sm btn-outline-primary"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger "
                  onClick={() => deleteArticle(item.id)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoCard;
