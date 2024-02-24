import { Route, Routes } from "react-router-dom";

import { useEffect } from "react";
import AuthService from "./service/auth";
import { useDispatch } from "react-redux";
import { signUserSuccess } from "./slice/auth";
import { getItem } from "./helpers/persistance-storage";
import { Home, Login } from "./pages";
import Navbar from "./components/Navbar";
import CreateTodo from "./components/Create-ToDo";
// import EditArticle from "./components/edit-article";
function App() {
  const dispatch = useDispatch();
  const getUser = async () => {
    try {
      const response = await AuthService.getUser();
      dispatch(signUserSuccess(response.user));
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    const token = getItem("token");
    if (token) {
      getUser();
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/article/:slug" element={<ArticleDetail />} /> */}
          <Route path="/create-todo" element={<CreateTodo />} />
          {/* <Route path="/edit-article/:slug" element={<EditArticle />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
