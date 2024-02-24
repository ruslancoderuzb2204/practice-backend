import axios from "../server/axios";

const AuthService = {
  // async userRegister(user) {
  //   const response = await axios.post("/login", { user });
  //   return response.data;
  // },
  async userLogin(user) {
    const response = await axios.post("/login", user);
    return response.data;
  },
  async getUser() {
    const { data } = await axios.get("/me");
    return data;
  },
};

export default AuthService;
