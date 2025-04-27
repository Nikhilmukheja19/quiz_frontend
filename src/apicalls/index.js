import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://quiz-server-s473.onrender.com",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default axiosInstance;
