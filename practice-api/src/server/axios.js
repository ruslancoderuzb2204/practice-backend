import axios from "axios";
import { getItem } from "../helpers/persistance-storage";

axios.defaults.baseURL = "http://localhost:3000/api/v1";

axios.interceptors.request.use(
  (config) => {
    const token = getItem("token");
    if (token) {
      config.headers["Authorization"] = `e576013a-6818-4f7b-beb2-871383d8af7b`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
export default axios;
