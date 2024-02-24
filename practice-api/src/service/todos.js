import axios from "../server/axios";
const ToDoService = {
  async getToDos() {
    const { data } = await axios.get("/todos");
    return data;
  },
  //   async getToDoDetail(slug) {
  //     const { data } = await axios.get(`ToDos/${slug}`);
  //     return data;
  //   },
  async postToDo(todo) {
    const { data } = await axios.post("/todos",  {
      'Content-Type': 'application/json',
      'Authorization': 'c97572a3-9ade-4a79-92c1-e23175845119'
  }, { ...todo });
    return data;
  },
  async deleteToDo(slug) {
    const { data } = await axios.delete(`ToDos/${slug}`);
    return data;
  },
  async showRole() {
    const { data } = await axios.get("/me");
    return data;
  },
  //   async editToDo(slug,ToDo) {
  //     const { data } = await axios.put(`ToDos/${slug}`,{ToDo});
  //     return data;
  //   }
};

export default ToDoService;
